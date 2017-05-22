import * as _ from 'lodash';
import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';
import { getBooleanFlagPermutations } from './utils/flag-utils';

export default class Modelkit {
    run(config) {
        const context = {
            config,
        };

        context.plugins = config.plugins;

        this.triggerPluginsMethod('beforeStart', context);

        context.files = this.readFiles(config);
        this.assignLoadersToFiles(config.loaders, context.files);
        this.readFileFlags(context.files);

        context.flags = this.getAllFlags(context.files);

        context.flagPermutations = getBooleanFlagPermutations(context.flags, config.freezeFlags);

        context.output = this.generateOutput(config, context);

        this.triggerPluginsMethod('afterGenerateOutput', context);

        this.flushOutput(config, context);

        this.triggerPluginsMethod('afterEnd', context);
    }

    triggerPluginsMethod(methodName, context) {
        _.forEach(context.plugins, (plugin) => {
            if (_.isFunction(plugin[methodName])) {
                plugin[methodName](context);
            }
        });
    }

    generateOutput(config, context) {
        // for every permutation generate { folder, files }
        const result = _.map(context.flagPermutations, (flagObj, flagIndex) => {
            const outputItem = {};
            // TODO: allow plugins to provide additional replacements in filename
            const flagDirectory = this.getDirectoryByFlag({ flagObj, flagIndex, config });
            outputItem.directory = path.join(config.outputDir, flagDirectory);
            outputItem.flags = Object.assign({}, flagObj);
            outputItem.files = _.map(context.files, file => Object.assign({}, file, {
                parent: file,
                source: file.loader
                    ? file.loader.getFileSourceWithFlags(file, outputItem.flags)
                    : file.source,
                filePath: path.join(outputItem.directory, file.fileName),
            }));

            return outputItem;
        });

        return result;
    }

    flushOutput(config, context) {
        mkdirp(config.outputDir);

        _.forEach(context.output, ({ directory, files }) => {
            mkdirp(directory);
            _.forEach(files, file => fs.writeFileSync(
                    file.filePath,
                    file.source,
                ),
            );
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
        const flags = _.union(
            _.flatten(
                _.map(
                    _.filter(files, file => file.flags),
                    file => file.flags,
                ),
            ),
        );

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
