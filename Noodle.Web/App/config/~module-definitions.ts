import configIconProvider = require("config/config-icon-provider");
import configAuthProvider = require("config/config-auth-provider");

export function init(app: ng.IModule) {
    configIconProvider.register(app);
    configAuthProvider.register(app);
}