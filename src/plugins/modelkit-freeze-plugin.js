export default class FreezePlugin {
    constructor(config) {
        this.config = config;
    }

    doStuff() {
        console.log(this.config);
    }

    getFreezeFlags() {
        return this.config.flags;
    }
};