export default class JsonLoader {
    constructor(config) {
        this.config = config;
    }

    doStuff() {
        console.log(this.config);
    }

    getFlags() {
        return ['json-1', 'json-2', 'common-2'];
    }
};