export default class YarnPlugin {
    constructor(config) {
        this.config = config;
    }

    doStuff() {
        console.log(this.config);
    }

    getFlags() {
        return ['yarn-1', 'yarn-2', 'common-1', 'common-2'];
    }
};