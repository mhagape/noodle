class DashboardVm {

    public static $inject = ["$auth","ndToolbarService"];
    constructor($auth,
        ndToolbarService: nd.services.INdToolbarSrv) {
        ndToolbarService.setTitle("Dashboard");
    }
}

export function register(app: ng.IModule) {
    app.controller("dashboardVm", DashboardVm);
} 