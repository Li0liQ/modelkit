import fs from 'fs';
import path from 'path';
import map from 'lodash/map';
import flatten from 'lodash/flatten';
import forEach from 'lodash/forEach';
import union from 'lodash/union';

export default class JsLoader {
    constructor(config) {
        this.config = config;
    }

    readFiles(inputDir) {
        this.files = map(this.config.files, (fileName) => {
            const filePath = path.join(inputDir, fileName);
            const source = fs.readFileSync(filePath, 'utf8');
            // TODO: Read flags
            const flags = ['js-1', 'js-2', 'common-1'];

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
                map(this.files, i => i.flags),
            ),
        );

        return flags;
    }

    applyFlags(flagObj, outputDir) {
        forEach(this.files, ({ fileName, source }) => {
            fs.writeFileSync(
                path.join(outputDir, fileName),
                source,
            );
        });
    }
}
