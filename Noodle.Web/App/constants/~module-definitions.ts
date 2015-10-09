import ndEndpoints = require("constants/nd-endpoints");
import ndCookieKeys = require("constants/nd-cookie-keys");
import ndApiResources = require("constants/nd-api-resources");

export function init(app: ng.IModule) {
    ndEndpoints.register(app);
    ndCookieKeys.register(app);
    ndApiResources.register(app);
}