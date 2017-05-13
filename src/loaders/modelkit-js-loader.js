import * as _ from 'lodash';
import grasp from 'grasp';
import BaseLoader from './modelkit-base-loader';

export default class JsLoader extends BaseLoader {
    constructor(config) {
        super(config);
        this.flagFunction = config.flagFunction;
    }

    readFileFlags(file) {
        const functionSearchPattern = `${this.flagFunction}(_str, _bool)`;
        const foundResult = grasp.search('equery', functionSearchPattern, file.source);
        const flags = _.map(foundResult, i => i.arguments[0].value);

        return flags;
    }

    getFileSourceWithFlags(file, flags) {
        const functionSearchPattern = `${this.flagFunction}(_str, _bool)`;
        const result = grasp.replace('equery', functionSearchPattern,
            (getRaw, node) => JSON.stringify(flags[node.arguments[0].value]),
            file.source,
        );

        return result;
    }
}
