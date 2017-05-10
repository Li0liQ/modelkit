import * as _ from 'lodash';
import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';
import { getBooleanFlagPermutations, sortFlags } from './utils/flag-utils';

export default class Modelkit {
    run(config) {
        // Copy the way to handle plugins and provide events from webpack. Later.

        this.readFiles(config);
        const flags = this.getFlags(config);
        const freezeFlags = this.getFreezeFlags(config.plugins);
        const flagPermutations = getBooleanFlagPermutations(flags, freezeFlags);

        // TODO: allow plugins to sort flags the way they want
        const sortedFlags = sortFlags(flagPermutations);

        mkdirp(config.outputDir);

        // Write a plugin that will create a manifest file.
        const featureFlagsToDirectoryMap = _.map(sortedFlags, (flagObj, flagIndex) =>
            ({
                flags: flagObj,
                directory: this.getDirectoryByFlag({ flagObj, flagIndex, config }),
            }),
        );

        fs.writeFileSync(
            path.join(config.outputDir, 'mapping.json'),
            JSON.stringify(featureFlagsToDirectoryMap, null, 2),
        );

        _.forEach(sortedFlags, (flagObj, flagIndex) => {
            this.applyFlags({ flagObj, flagIndex, config });
        });
    }

    applyFlags({ flagObj, flagIndex, config }) {
        const flagCopy = Object.assign({}, flagObj);
        // TODO: allow plugins to provide additional replacements in filename
        const flagDirectory = this.getDirectoryByFlag({ flagObj, flagIndex, config });
        const outputDir = path.join(config.outputDir, flagDirectory);

        mkdirp(outputDir);
        _.forEach(config.input, i => i.applyFlags(flagCopy, outputDir));
    }

    getDirectoryByFlag({ flagIndex, config }) {
        // TODO: allow plugins to provide additional replacements in filename
        const result = config.flagDirName.replace('[id]', flagIndex);
        return result;
    }

    getFlags(config) {
        // we support only boolean flags for now
        // hence union and returning flag names only works fine
        const flags = _.union(
            _.flatten(
                _.map(config.input, i => i.getFlags()),
            ),
        );

        return flags;
    }

    readFiles(config) {
        _.forEach(config.input, i => i.readFiles(config.inputDir));
    }

    getFreezeFlags(input) {
        // TODO: check if there are different values assigned for the same flags.
        // Throw if there are.
        const freezeFlags = _.map(input, i => i.getFreezeFlags());

        const uniqueFreezeFlags = _.reduce(
            freezeFlags,
            (agg, i) => Object.assign(agg, i),
            {},
        );

        return uniqueFreezeFlags;
    }
}
