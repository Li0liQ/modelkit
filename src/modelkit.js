import mkdirp from 'mkdirp';
import path from 'path';
import foreach from 'lodash/foreach';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import flatten from 'lodash/flatten';
import union from 'lodash/union';
import { getFlagBits, getBooleanFlagPermutations, sortFlags } from './utils/flag-utils';

export default class Modelkit {
    constructor() {
    }

    run(config) {
        // Copy the way to handle plugins and provide events from webpack. Later.
        mkdirp(config.outputDir);
        foreach(config.input, i => i.doStuff());

        const flags = this.getFlags(config.input);
        const freezeFlags = this.getFreezeFlags(config.plugins);
        const flagPermutations = getBooleanFlagPermutations(flags, freezeFlags);
        
        // TODO: allow plugins to sort flags the way they want
        const sortedFlags = sortFlags(flagPermutations);

        // TODO: allow plugins to provide additional replacements in filename
        const getDirName = (i) => config.flagDirName.replace('[id]', i);
        
        foreach(sortedFlags, (i, index) => {
            mkdirp(path.join(config.outputDir, getDirName(index)));
        });

        // Write a plugin that will create a manifest file.
    }

    getFlags(input) {
        // we support only boolean flags for now
        // hence union and returning flag names only works fine
        const flags = union(
            flatten(
                map(input, i => i.getFlags())
            )
        );

        return flags;
    }

    getFreezeFlags(input) {
        // TODO: check if there are different values assigned for the same flags.
        // Throw if there are.
        const freezeFlags = map(input, i => i.getFreezeFlags());

        const uniqueFreezeFlags = reduce(
            freezeFlags,
            (agg, i) => Object.assign(agg, i),
            {}
        );

        return uniqueFreezeFlags;
    }
}