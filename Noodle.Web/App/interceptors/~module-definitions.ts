import ndApiaryInterceptor = require("interceptors/nd-apiary-interceptor");

export function init(app: ng.IModule) {
    ndApiaryInterceptor.register(app);
}