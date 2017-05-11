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

        const files = _.map(this.config.files, (fileName) => {
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

        this.files = files;

        return files;
    }

    applyFlagsToAllFiles(flagObj, outputDir) {
        _.forEach(this.files, (fileObj) => {
            const result = this.applyFlagsToFile(fileObj, flagObj);

            fs.writeFileSync(
                path.join(outputDir, fileObj.fileName),
                result,
            );
        });
    }

    applyFlagsToFile(fileObj, flagObj) {
        const functionSearchPattern = `${this.config.flagFunction}(_str, _bool)`;
        const result = grasp.replace('equery', functionSearchPattern,
            (getRaw, node) => JSON.stringify(flagObj[node.arguments[0].value]),
            fileObj.source,
        );

        return result;
    }
}
