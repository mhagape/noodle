import ndAuthService = require("services/nd-auth-service");
import ndUserService = require("services/nd-user-service");

export function init(app: ng.IModule) {
    ndAuthService.register(app);
    ndUserService.register(app);
}