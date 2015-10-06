import ndEndpoints = require("constants/nd-endpoints");
import ndCookieKeys = require("constants/nd-cookie-keys");

export function init(app: ng.IModule) {
    ndEndpoints.register(app);
    ndCookieKeys.register(app);
}