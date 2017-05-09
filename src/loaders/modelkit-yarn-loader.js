import fs from 'fs';
import path from 'path';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import forEach from 'lodash/forEach';
import filter from 'lodash/filter';
import isPlainObject from 'lodash/isPlainObject';
import parse from 'yarn/lib/lockfile/parse';
import stringify from 'yarn/lib/lockfile/stringify';

// No array support atm.
const deleteProperty = (obj, pattern) => {
    forEach(pattern, (value, key) => {
        const subObj = obj[key];

        if (typeof subObj === 'undefined') {
            return;
        }

        if (isPlainObject(value) && isPlainObject(subObj)) {
            deleteProperty(subObj, value);
        } else {
            delete obj[key];
        }
    });
};

const updateProperty = (obj, pattern) => {
    forEach(pattern, (value, key) => {
        const subObj = obj[key];

        if (typeof subObj === 'undefined') {
            obj[key] = value;

            return;
        }

        if (isPlainObject(value) && isPlainObject(subObj)) {
            updateProperty(subObj, value);
        } else {
            obj[key] = value;
        }
    });
};

export default class YarnLoader {
    constructor(config) {
        this.config = config;
    }

    readFiles(inputDir) {
        this.files = map(this.config.files, (fileName) => {
            const filePath = path.join(inputDir, fileName);
            const source = fs.readFileSync(filePath, 'utf8')
                .replace(/\r\n/g, '\n'); // important for yarn parser

            return {
                fileName,
                filePath,
                source,
            };
        });
    }

    getFlags() {
        const flags = map(this.config.changes, i => i.flag);

        return flags;
    }

    applyFlags(flagObj, outputDir) {
        forEach(this.files, ({ fileName, filePath, source }) => {
            let json = parse(source, filePath);
            json = reduce(flagObj, (agg, value, key) => {
                if (!value) {
                    return agg;
                }

                const changes = filter(this.config.changes, i => i.flag === key)[0];

                if (typeof changes === 'undefined') {
                    return agg;
                }

                if (changes.delete) {
                    deleteProperty(agg, changes.delete);
                }

                if (changes.update) {
                    updateProperty(agg, changes.update);
                }

                return agg;
            }, json);

            fs.writeFileSync(
                path.join(outputDir, fileName),
                stringify(json, false),
            );
        });
    }
}
