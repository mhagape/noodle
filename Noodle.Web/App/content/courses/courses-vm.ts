class CoursesVm {

    private $$ndCoursesSrv: nd.services.INdCoursesSrv;


    public static $inject = ["ndToolbarService", "ndCoursesSrv"];
    constructor(ndToolbarService: nd.services.INdToolbarSrv,
        ndCoursesSrv: nd.services.INdCoursesSrv) {

        var self = this;
        self.$$ndCoursesSrv = ndCoursesSrv;
        ndToolbarService.setTitle("Courses");

        self.init();
    }

    private init() {
        var self = this;
        self.$$ndCoursesSrv.getCourses().then((courses) => {
            self.courses = courses;
        });
    }

    public courses = null;
}

export function register(app: ng.IModule) {
    app.controller("coursesVm", CoursesVm);
}