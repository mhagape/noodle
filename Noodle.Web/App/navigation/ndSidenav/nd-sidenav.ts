class NdSidenav {
    public scope = {}
    public controller = "ndSidenavVm";
    public controllerAs = "vm";
    public templateUrl = "App/navigation/ndSidenav/nd-sidenav.html";
}

class NdSidenavVm {

    private $$ndUserService: nd.services.INdUserService;
    private $$ndAuthService: nd.services.INdAuthService;
    private $$state: ng.ui.IStateService;

    public static $inject = ["$state", "ndUserService", "ndAuthService"];
    constructor(
        $state: ng.ui.IStateService,
        ndUserService: nd.services.INdUserService,
        ndAuthService: nd.services.INdAuthService) {

        var self = this;
        self.$$ndUserService = ndUserService;
        self.$$ndAuthService = ndAuthService;
        self.$$state = $state;
    }

    public logout() {
        var self = this;
        self.$$ndAuthService.logout();
        self.$$state.go("login");
    }
}

export function register(app: ng.IModule) {
    app.controller("ndSidenavVm", NdSidenavVm);
    app.directive("ndSidenav", () => new NdSidenav());
}