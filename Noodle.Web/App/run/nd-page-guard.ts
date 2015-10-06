export function register(app: ng.IModule) {
    app.run(["$rootScope", "$auth", "$state",
        ($rootScope: ng.IRootScopeService,
            $auth,
            $state: ng.ui.IStateService) => {
            $rootScope.$on("$stateChangeStart", (event, toState, toParams, fromState, fromParams) => {
                if (!$auth.isAuthenticated() && toState.name !== "login") {
                    event.preventDefault();
                    $state.go("login");
                }
            });
        }]);
} 