import * as _ from 'lodash';

export default class IgnorePlugin {
    constructor(config) {
        this.config = config;
    }

    afterGenerateOutput(context) {
        _.forEach(context.output, (outputItem) => {
            if (!outputItem.flags[this.config.flag] === true) {
                return;
            }

            outputItem.files = _.filter(outputItem.files, file =>
                this.config.files.indexOf(file.parent.fileName) === -1,
            );
        });
    }
}
