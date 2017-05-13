import * as _ from 'lodash';
import BaseLoader from './modelkit-base-loader';

// No array support atm.
const deleteProperty = (obj, pattern) => {
    _.forEach(pattern, (value, key) => {
        const subObj = obj[key];

        if (typeof subObj === 'undefined') {
            return;
        }

        if (_.isPlainObject(value) && _.isPlainObject(subObj)) {
            deleteProperty(subObj, value);
        } else {
            delete obj[key];
        }
    });
};

const updateProperty = (obj, pattern) => {
    _.forEach(pattern, (value, key) => {
        const subObj = obj[key];

        if (typeof subObj === 'undefined') {
            obj[key] = value;

            return;
        }

        if (_.isPlainObject(value) && _.isPlainObject(subObj)) {
            updateProperty(subObj, value);
        } else {
            obj[key] = value;
        }
    });
};

export default class JsonLoader extends BaseLoader {
    constructor(config) {
        super(config);
        this.changes = config.changes;
    }

    readFileFlags() {
        const flags = _.map(this.changes, i => i.flag);

        return flags;
    }

    getFileSourceWithFlags(file, flags) {
        let json = JSON.parse(file.source);

        json = _.reduce(flags, (agg, value, key) => {
            if (!value) {
                return agg;
            }

            const changes = _.filter(this.changes, i => i.flag === key)[0];

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

        const result = JSON.stringify(json, null, 2);

        return result;
    }
}
