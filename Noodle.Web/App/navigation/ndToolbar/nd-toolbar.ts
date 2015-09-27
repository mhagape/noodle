class NdToolbar {
    public scope = {};
    public templateUrl = "App/navigation/ndToolbar/nd-toolbar.html";
    public controller = "ndToolbarVm";
    public controllerAs = "vm";
}

class NdToolbarVm implements nd.vms.INdToolbarVm {

    private $$ndSidenavService: nd.services.ISidenavService;
    private $$ndToolbarService: nd.services.INdToolbarService;

    public static $inject = ["ndSidenavService", "ndToolbarService"];
    constructor(ndSidenavService: nd.services.ISidenavService,
        ndToolbarService: nd.services.INdToolbarService) {
        var self = this;
        self.$$ndSidenavService = ndSidenavService;
        self.$$ndToolbarService = ndToolbarService;
    }
    public toggleSidenav() {
        var self = this;
        self.$$ndSidenavService.toggle();
    }
}

export function register(app: ng.IModule) {
    app.controller("ndToolbarVm", NdToolbarVm);
    app.directive("ndToolbar", () => new NdToolbar());
}