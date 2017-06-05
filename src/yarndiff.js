const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const parse = require('yarn/lib/lockfile/parse').default;

function calculateDiff(sourceJson, destJson, diff, objectPath = '') {
    const sourceKeys = Object.keys(sourceJson);
    const destKeys = Object.keys(destJson);

    const deletedKeys = _.difference(sourceKeys, destKeys);
    const createdKeys = _.difference(destKeys, sourceKeys);
    const commonKeys = _.intersection(sourceKeys, destKeys);

    _.forEach(deletedKeys, (key) => {
        if (objectPath && !_.has(diff.delete, objectPath)) {
            _.set(diff.delete, objectPath, {});
        }

        Object.assign(diff.delete, { [key]: null });
    });

    _.forEach(createdKeys, (key) => {
        if (objectPath && !_.has(diff.update, objectPath)) {
            _.set(diff.update, objectPath, {});
        }

        Object.assign(diff.update, { [key]: destJson[key] });
    });

    _.forEach(commonKeys, (key) => {
        const sourceValue = sourceJson[key];
        const destValue = destJson[key];

        if (_.isPlainObject(sourceValue) && _.isPlainObject(destValue)) {
            calculateDiff(sourceValue, destValue, diff, objectPath ? `${objectPath}.${key}` : `${key}`);
        } else if (sourceValue !== destValue) {
            _.set(diff.update, objectPath ? `${objectPath}.${key}` : `${key}`, destValue);
        }
    });
}

function getYarnJson(file) {
    const fileSource = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n'); // important for yarn parser
    const json = parse(fileSource, path.dirname(file));

    return json;
}

module.exports = function generateDiff(source, dest) {
    const sourceJson = getYarnJson(source);
    const destJson = getYarnJson(dest);

    const diff = {
        delete: {},
        update: {},
    };

    calculateDiff(sourceJson, destJson, diff);

    return diff;
};
