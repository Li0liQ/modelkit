import * as _ from 'lodash';
import escapeRegex from 'escape-string-regexp';

export default class BaseLoader {
    constructor(config) {
        if (config.test) {
            this.test = config.test;
        } else {
            this.test = new RegExp(_.map(config.files, escapeRegex).join('|'));
        }
    }
}
