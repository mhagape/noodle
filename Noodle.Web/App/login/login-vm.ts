class LoginVm {

    private $$ngAuthService: nd.services.INdAuthSrv;

    public static $inject = ["$scope", "ndAuthService"];
    constructor($scope,
        ndAuthService: nd.services.INdAuthSrv) {
        var self = this;
        self.$$ngAuthService = ndAuthService;
    }

    public authenticate(provider: string) {
        this.$$ngAuthService.authenticate(provider);
    }
}

export function register(app: ng.IModule) {
    app.controller("loginVm", LoginVm);
}