class NdUserService implements nd.services.INdUserSrv {

    private $$http: ng.IHttpService;
    private $$auth;
    private $$ndEndpoints: nd.constants.INdEndpoints;
    private $$cookies: ng.cookies.ICookiesService;
    private $$loggedUser: nd.ILoggedUser;
    private $$ndCookieKeys: nd.constants.INdCookieKeys;
    private $$q: ng.IQService;

    public static $inject = ["$http", "$auth", "$cookies", "$q", "ndEndpoints", "ndCookieKeys"];
    constructor(
        $http: ng.IHttpService,
        $auth,
        $cookies: ng.cookies.ICookiesService,
        $q: ng.IQService,
        ndEndpoints: nd.constants.INdEndpoints,
        ndCookieKeys: nd.constants.INdCookieKeys) {

        var self = this;
        self.$$http = $http;
        self.$$auth = $auth;
        self.$$ndEndpoints = ndEndpoints;
        self.$$cookies = $cookies;
        self.$$ndCookieKeys = ndCookieKeys;
        self.$$q = $q;

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
            return self.$$http.get("/me/" + encodeURIComponent(response.data.email)).then((res: any) => {
                self.setLogedUser({
                    email: response.data.email,
                    avatar: response.data.picture,
                    name: response.data.name,
                    _links: res.data._links
                });
                return self.getLoggedUser();
            });
        });
    }

    public getUserDetailsFromFacebook(): ng.IPromise<any> {
        var self = this;
        var token = self.$$auth.getToken();
        return self.$$http.get(self.$$ndEndpoints.FACEBOOK_USER_INFO + token).then((response: any) => {
            return self.$$http.get("/me/" + encodeURIComponent(response.data.email)).then((res: any) => {
                self.setLogedUser({
                    email: response.data.email,
                    avatar: "https://graph.facebook.com/" + response.data.id + "/picture?type=square",
                    name: response.data.name,
                    _links: res.data._links
                });
                return self.getLoggedUser();
            });
        });
    }
}
export function register(app: ng.IModule) {
    app.service("ndUserService", NdUserService);
}