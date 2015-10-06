class DashboardVm {

    public static $inject = ["$auth","ndToolbarService"];
    constructor($auth,
        ndToolbarService: nd.services.INdToolbarService) {
        ndToolbarService.setTitle("Dashboard");
    }
}

export function register(app: ng.IModule) {
    app.controller("dashboardVm", DashboardVm);
} 