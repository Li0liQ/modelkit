import * as _ from 'lodash';
import fs from 'fs';
import path from 'path';

export default class ManifestPlugin {
    constructor(config) {
        this.config = config;
    }

    afterEnd(context) {
        const featureFlagsToDirectoryMap = _.map(context.flagPermutations, (flagObj, flagIndex) =>
            ({
                flags: flagObj,
                directory: context.flagPermutationDirectories[flagIndex],
            }),
        );

        fs.writeFileSync(
            path.join(context.config.outputDir, this.config.file),
            JSON.stringify(featureFlagsToDirectoryMap, null, 2),
        );
    }
}
