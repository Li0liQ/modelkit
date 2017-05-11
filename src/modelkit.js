import * as _ from 'lodash';
import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';
import { getBooleanFlagPermutations, sortFlags } from './utils/flag-utils';

export default class Modelkit {
    run(config) {
        const state = {
            config,
        };

        // TODO: refactor. Extract files reading from fs here.
        state.files = this.readFiles(config);
        state.flags = this.getFlags(state);

        // Extract permutations into plugin.
        const freezeFlags = this.getFreezeFlags(config.plugins);
        state.flagPermutations = sortFlags(getBooleanFlagPermutations(state.flags, freezeFlags));
        state.flagPermutationDirectories = _.map(
            state.flagPermutations,
            (flagObj, flagIndex) => this.getDirectoryByFlag({ flagObj, flagIndex, config }),
        );

        mkdirp(config.outputDir);

        _.forEach(_.filter(config.plugins.filter(i => i.getManifest)), i => i.getManifest(state));

        _.forEach(state.flagPermutations, (flagObj, flagIndex) => {
            this.applyFlagsToAllFiles({ flagObj, flagIndex, config });
        });
    }

    applyFlagsToAllFiles({ flagObj, flagIndex, config }) {
        // TODO: refactor. Extract files writing here.
        const flagCopy = Object.assign({}, flagObj);
        // TODO: allow plugins to provide additional replacements in filename
        const flagDirectory = this.getDirectoryByFlag({ flagObj, flagIndex, config });
        const outputDir = path.join(config.outputDir, flagDirectory);

        mkdirp(outputDir);
        _.forEach(config.input, i => i.applyFlagsToAllFiles(flagCopy, outputDir));
    }

    getDirectoryByFlag({ flagIndex, config }) {
        // TODO: allow plugins to provide additional replacements in filename
        const result = config.flagDirName.replace('[id]', flagIndex);
        return result;
    }

    getFlags(state) {
        // we support only boolean flags for now
        // hence union and returning flag names only works fine
        const flags = _.union(_.flatten(_.map(state.files, file => file.flags)));
        return flags;
    }

    readFiles(config) {
        const files = _.flatten(_.map(config.input, loader => loader.readFiles(config.inputDir)));
        return files;
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
}
