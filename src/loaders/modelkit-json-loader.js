import fs from 'fs';
import path from 'path';
import map from 'lodash/map';
import flatten from 'lodash/flatten';
import reduce from 'lodash/reduce';
import foreach from 'lodash/foreach';
import filter from 'lodash/filter';
import union from 'lodash/union';
import isPlainObject from 'lodash/isPlainObject';

// No array support atm. 
const deleteProperty = (obj, pattern) => {
    foreach(pattern, (value, key) => {
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
    foreach(pattern, (value, key) => {
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

export default class JsonLoader {
    constructor(config) {
        this.config = config;
    }

    readFiles(inputDir) {
        this.files = map(this.config.files, (fileName, index) => {
            const filePath = path.join(inputDir, fileName);
            const source = fs.readFileSync(filePath, 'utf8');

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
        foreach(this.files, ({ fileName, source, }) => {
            let json = JSON.parse(source);

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
                JSON.stringify(json, null, 2)
            );
        })
    }
};