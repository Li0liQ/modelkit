export default class FreezePlugin {
    constructor(config) {
        this.config = config;
    }

    getFreezeFlags() {
        return this.config.flags;
    }
}
