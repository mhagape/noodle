class DashboardVm {

    public static $inject = ["ndToolbarService"];
    constructor(ndToolbarService:nd.services.INdToolbarService) {
        ndToolbarService.setTitle("Dashboard");
    }
}

export function register(app: ng.IModule) {
    app.controller("dashboardVm", DashboardVm);
} 