import loginVm = require("login/login-vm");
import routeDef = require("login/route-def");

export function init(app: ng.IModule) {
    loginVm.register(app);
    routeDef.register(app);
}