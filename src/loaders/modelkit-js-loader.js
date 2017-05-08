export default class JsLoader {
    constructor(config) {
        this.config = config;
    }

    doStuff() {
        console.log(this.config);
    }

    getFlags() {
        return ['js-1', 'js-2', 'common-1'];
    }
};