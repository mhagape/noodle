class LoginVm {

    private $$ngAuthService:nd.services.INdAuthService;

    public static $inject = ["$scope", "ndAuthService"];
    constructor($scope,
        ndAuthService: nd.services.INdAuthService) {
        var self = this;
        self.$$ngAuthService = ndAuthService;

        $scope.myDate = new Date();
        $scope.minDate = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth() - 2,
            $scope.myDate.getDate());
        $scope.maxDate = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth() + 2,
            $scope.myDate.getDate());
    }

    public authenticate(provider: string) {
        this.$$ngAuthService.authenticate(provider);
    }
}

export function register(app: ng.IModule) {
    app.controller("loginVm", LoginVm);
}