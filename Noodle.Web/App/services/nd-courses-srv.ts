class NdCoursesSrv implements nd.services.INdCoursesSrv {

    private $$ndUserService: nd.services.INdUserSrv;
    private $$http: ng.IHttpService;
    private $$ndApiResources: nd.constants.INdApiResources;

    public static $inject = ["$http", "ndUserService", "ndApiResources"];
    constructor(
        $http: ng.IHttpService,
        ndUserService: nd.services.INdUserSrv,
        ndApiResources: nd.constants.INdApiResources) {

        var self = this;
        self.$$http = $http;
        self.$$ndUserService = ndUserService;
        self.$$ndApiResources = ndApiResources;
    }

    private getLink(list, resource): string {
        for (var i = 0; i < list._links.length; i++) {
            if (list._links[i].rel === resource) {
                return list._links[i].href;
            }
        }
    }

    public getLoggedUserCourses(): ng.IPromise<Array<any>> {
        var self = this;
        var user = self.$$ndUserService.getLoggedUser();
        var link = self.getLink(user, self.$$ndApiResources.MY_COURSES);
        return self.$$http.get(link).then((res: any) => {
            return res.data;
        });
    }

}

export function register(app: ng.IModule) {
    app.service("ndCoursesSrv", NdCoursesSrv);
}