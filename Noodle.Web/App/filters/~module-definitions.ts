import ndJoin = require("filters/nd-join");

export function init(app: ng.IModule) {
    ndJoin.register(app);
}