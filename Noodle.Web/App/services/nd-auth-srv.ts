class NdAuthService implements nd.services.INdAuthSrv {

    private $$auth;
    private $$http: ng.IHttpService;
    private $$state: ng.ui.IStateService;
    private $$cookies: ng.cookies.ICookiesService;
    private $$mdToast: md.IToastService;
    private $$ndUserService: nd.services.INdUserSrv;
    private $$ndCookieKeys: nd.constants.INdCookieKeys;

    public static $inject = ["$auth", "$http", "$state", "$cookies", "$mdToast", "ndUserService", "ndCookieKeys"];
    constructor(
        $auth,
        $http: ng.IHttpService,
        $state: ng.ui.IStateService,
        $cookies: ng.cookies.ICookiesService,
        $mdToast: md.IToastService,
        ndUserService: nd.services.INdUserSrv,
        ndCookieKeys: nd.constants.INdCookieKeys) {

        var self = this;
        self.$$auth = $auth;
        self.$$http = $http;
        self.$$state = $state;
        self.$$cookies = $cookies;
        self.$$ndUserService = ndUserService;
        self.$$ndCookieKeys = ndCookieKeys;
    }

    public logout() {
        var self = this;
        self.$$auth.logout();
        self.$$cookies.remove(self.$$ndCookieKeys.LOGGED_USER_DETAILS);
    }
    public authenticate(provider: string) {
        var self = this;
        self.$$auth.authenticate(provider).then(response => {
            var userDetailsPromise;
            switch (provider) {
                case "google":
                    userDetailsPromise = self.$$ndUserService.getUserDetailsFromGoogle();
                    break;
                case "facebook":
                    userDetailsPromise = self.$$ndUserService.getUserDetailsFromFacebook();
                    break;
                default:
                    userDetailsPromise = self.$$ndUserService.getUserDetailsFromGoogle();
            }
            userDetailsPromise.then(response => {
                self.$$state.go("content.dashboard");
            });
        })
            .catch(response => {
                self.$$mdToast.showSimple(response);
            });
    }
}

export function register(app: ng.IModule) {
    app.service("ndAuthService", NdAuthService);
}