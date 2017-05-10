import * as _ from 'lodash';
import fs from 'fs';
import path from 'path';
import grasp from 'grasp';

export default class JsLoader {
    constructor(config) {
        this.config = config;
    }

    readFiles(inputDir) {
        const functionSearchPattern = `${this.config.flagFunction}(_str, _bool)`;

        this.files = _.map(this.config.files, (fileName) => {
            const filePath = path.join(inputDir, fileName);
            const source = fs.readFileSync(filePath, 'utf8');
            const foundResult = grasp.search('equery', functionSearchPattern, source);
            const flags = _.map(foundResult, i => i.arguments[0].value);

            return {
                fileName,
                filePath,
                flags,
                source,
            };
        });
    }

    getFlags() {
        const flags = _.union(
            _.flatten(
                _.map(this.files, i => i.flags),
            ),
        );

        return flags;
    }

    applyFlags(flagObj, outputDir) {
        const functionSearchPattern = `${this.config.flagFunction}(_str, _bool)`;

        _.forEach(this.files, ({ fileName, source }) => {
            const result = grasp.replace('equery', functionSearchPattern,
                (getRaw, node) => JSON.stringify(flagObj[node.arguments[0].value]),
                source,
            );

            fs.writeFileSync(
                path.join(outputDir, fileName),
                result,
            );
        });
    }
}
