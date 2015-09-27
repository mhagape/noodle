class NdSidenavService implements nd.services.ISidenavService {
    private $mdUtil;
    private $mdSidenav;

    public static $inject = ["$mdSidenav", "$mdUtil"];
    constructor($mdSidenav, $mdUtil) {
        var self = this;
        self.$mdSidenav = $mdSidenav;
        self.$mdUtil = $mdUtil;

        self.toggle = self.buildToggler("ndSidenav");
    }

    private buildToggler(navID: string) {
        var self = this;
        var debounceFn = self.$mdUtil.debounce(() => {
            this.$mdSidenav(navID)
                .toggle();
        }, 200);
        return debounceFn;
    }

    public toggle = null;
}

export function register(app: ng.IModule) {
    app.service("ndSidenavService", NdSidenavService);
}