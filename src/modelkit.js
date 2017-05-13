import * as _ from 'lodash';
import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';
import { getBooleanFlagPermutations, sortFlags } from './utils/flag-utils';

export default class Modelkit {
    run(config) {
        const context = {
            config,
        };

        context.files = this.readFiles(config);
        this.assignLoadersToFiles(config.loaders, context.files);
        this.readFileFlags(context.files);

        context.flags = this.getAllFlags(context.files);

        // Extract permutations into a plugin.
        const freezeFlags = this.getFreezeFlags(config.plugins);
        context.flagPermutations = sortFlags(
            getBooleanFlagPermutations(context.flags, freezeFlags),
        );
        context.flagPermutationDirectories = _.map(
            context.flagPermutations,
            (flagObj, flagIndex) => this.getDirectoryByFlag({ flagObj, flagIndex, config }),
        );

        mkdirp(config.outputDir);

        _.forEach(_.filter(config.plugins.filter(i => i.getManifest)), i => i.getManifest(context));

        this.applyFlagsToAllFilesAndWrite(config, context);
    }

    applyFlagsToAllFilesAndWrite(config, context) {
        _.forEach(context.flagPermutations, (flagObj, flagIndex) => {
            const flagCopy = Object.assign({}, flagObj);
            // TODO: allow plugins to provide additional replacements in filename
            const flagDirectory = this.getDirectoryByFlag({ flagObj, flagIndex, config });
            const outputDir = path.join(config.outputDir, flagDirectory);

            mkdirp(outputDir);

            _.forEach(context.files, (file) => {
                if (file.loader) {
                    file.source = file.loader.getFileSourceWithFlags(file, flagCopy);
                }

                fs.writeFileSync(
                    path.join(outputDir, file.fileName),
                    file.source,
                );
            });
        });
    }

    getDirectoryByFlag({ flagIndex, config }) {
        // TODO: allow plugins to provide additional replacements in filename
        const result = config.flagDirName.replace('[id]', flagIndex);
        return result;
    }

    readFileFlags(files) {
        _.each(files, (file) => {
            if (file.loader) {
                file.flags = file.loader.readFileFlags(file);
            }
        });
    }

    getAllFlags(files) {
        // we support only boolean flags for now
        // hence union and returning flag names only works fine
        const flags = _.union(_.flatten(_.map(files, file => file.flags)));
        return flags;
    }

    readFiles(config) {
        const filePathList = _.filter(
            _.map(
                fs.readdirSync(config.inputDir),
                fileName => path.join(config.inputDir, fileName),
            ),
            filePath => fs.statSync(filePath).isFile(),
        );

        const fileList = _.map(filePathList, (filePath) => {
            const source = fs.readFileSync(filePath, 'utf8');
            const fileName = path.basename(filePath);

            return {
                fileName,
                filePath,
                source,
            };
        });

        return fileList;
    }

    getFreezeFlags(input) {
        // TODO: check if there are different values assigned for the same flags.
        // Throw if there are.
        const freezeFlags = _.map(_.filter(input, i => i.getFreezeFlags), i => i.getFreezeFlags());

        const uniqueFreezeFlags = _.reduce(
            freezeFlags,
            (agg, i) => Object.assign(agg, i),
            {},
        );

        return uniqueFreezeFlags;
    }

    assignLoadersToFiles(loaders, files) {
        _.each(files, file => _.each(loaders, (loader) => {
            if (loader.test.test(file.fileName)) {
                if (file.loader) {
                    throw new Error(`File ${file.fileName} has more than one loader matching it. Please, fix config.`);
                }

                file.loader = loader;
            }
        }));
    }
}
