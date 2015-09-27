export function register(app: ng.IModule) {
    app.config(["$stateProvider", "$urlRouterProvider", ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise("/login");
        $stateProvider
            .state("login", {
                url: "/login",
                controller: "loginVm",
                controllerAs: "vm",
                templateUrl: "App/login/login.html"
            });
    }]);
}