class NdUserService implements nd.services.INdUserService {

    private $$http: ng.IHttpService;
    private $$auth;
    private $$ndEndpoints: nd.constants.INdEndpoints;
    private $$cookies: ng.cookies.ICookiesService;
    private $$loggedUser: nd.ILoggedUser;
    private $$ndCookieKeys: nd.constants.INdCookieKeys;

    public static $inject = ["$http", "$auth", "$cookies", "ndEndpoints", "ndCookieKeys"];
    constructor(
        $http: ng.IHttpService,
        $auth,
        $cookies: ng.cookies.ICookiesService,
        ndEndpoints: nd.constants.INdEndpoints,
        ndCookieKeys: nd.constants.INdCookieKeys) {

        var self = this;
        self.$$http = $http;
        self.$$auth = $auth;
        self.$$ndEndpoints = ndEndpoints;
        self.$$cookies = $cookies;
        self.$$ndCookieKeys = ndCookieKeys;

        self.init();
    }

    private init() {
        var self = this;
        self.$$loggedUser = self.$$cookies.getObject(self.$$ndCookieKeys.LOGGED_USER_DETAILS);
    }

    private setLogedUser(user: nd.ILoggedUser) {
        var self = this;
        self.$$cookies.putObject(self.$$ndCookieKeys.LOGGED_USER_DETAILS, user);
        self.$$loggedUser = user;
    }

    public getLoggedUser(): nd.ILoggedUser {
        return this.$$loggedUser;
    }

    public getUserDetailsFromGoogle(): ng.IPromise<any> {
        var self = this;
        var token = self.$$auth.getToken();
        return <any>self.$$http.get(self.$$ndEndpoints.GOOGLE_USER_INFO + token).then((response: any) => {
            self.setLogedUser({
                email: response.data.email,
                avatar: response.data.picture
            });
            return self.getLoggedUser();
        });
    }

    public getUserDetailsFromFacebook(): ng.IPromise<any> {
        var self = this;
        debugger;
        var token = self.$$auth.getToken();
        return <any>self.$$http.get(self.$$ndEndpoints.FACEBOOK_USER_INFO + token).then((response: any) => {
            self.setLogedUser({
                email: response.data.email,
                avatar: "https://graph.facebook.com/" + response.data.id + "/picture?type=square"
            });
            return self.getLoggedUser();
        });
    }
}
export function register(app: ng.IModule) {
    app.service("ndUserService", NdUserService);
}