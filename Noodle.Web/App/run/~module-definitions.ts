import ndPageGuard = require("run/nd-page-guard");

export function init(app: ng.IModule) {
    ndPageGuard.register(app);
}