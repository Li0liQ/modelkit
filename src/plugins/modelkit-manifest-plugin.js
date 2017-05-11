import * as _ from 'lodash';
import fs from 'fs';
import path from 'path';

export default class ManifestPlugin {
    constructor(config) {
        this.config = config;
    }

    getManifest(state) {
        const featureFlagsToDirectoryMap = _.map(state.flagPermutations, (flagObj, flagIndex) =>
            ({
                flags: flagObj,
                directory: state.flagPermutationDirectories[flagIndex],
            }),
        );

        fs.writeFileSync(
            path.join(state.config.outputDir, this.config.file),
            JSON.stringify(featureFlagsToDirectoryMap, null, 2),
        );
    }
}
