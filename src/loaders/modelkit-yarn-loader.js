import fs from 'fs';
import path from 'path';
import map from 'lodash/map';
import flatten from 'lodash/flatten';
import foreach from 'lodash/foreach';
import union from 'lodash/union';

export default class YarnPlugin {
    constructor(config) {
        this.config = config;
    }

    readFiles(inputDir) {
        this.files = map(this.config.files, (fileName, index) => {
            const filePath = path.join(inputDir, fileName);
            const source = fs.readFileSync(filePath, 'utf8');
            // TODO: Read flags
            const flags = ['yarn-1', 'yarn-2', 'common-1', 'common-2'];

            return {
                fileName,
                filePath,
                flags,
                source,
            };
        });
    }

    getFlags() {
        const flags = union(
            flatten(
                map(this.files, i => i.flags)
            )
        );

        return flags;
    }

    applyFlags(flagObj, outputDir) {
        foreach(this.files, ({ fileName, filePath, flags, source, }) => {
            fs.writeFileSync(
                path.join(outputDir, fileName),
                source
            );
        })
    }
};