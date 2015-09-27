import configIconProvider = require("config/config-icon-provider");

export function init(app: ng.IModule) {
    configIconProvider.register(app);
}