class MyCoursesSection {
    public scope = {};
    public controller = "myCoursesSectionVm";
    public controllerAs = "vm";
    public templateUrl = "App/content/dashboard/sections/myCourseSection/my-course-section.html";
}

class MyCoursesSectionVm {

    private $$ndCoursesSrv: nd.services.INdCoursesSrv;

    public static $inject = ["ndCoursesSrv"];
    constructor(
        ndCoursesSrv: nd.services.INdCoursesSrv) {

        var self = this;
        self.$$ndCoursesSrv = ndCoursesSrv;

        self.init();
    }

    private init() {
        var self = this;
        self.$$ndCoursesSrv.getLoggedUserCourses().then(courses => {
            self.courses = courses;
        });
    }

    public courseInfo(couse) {
        
    }

    public leaveCourse(couse) {
        
    }
    
    public courses: Array<any>;
}

export function register(app: ng.IModule) {
    app.controller("myCoursesSectionVm", MyCoursesSectionVm);
    app.directive("myCoursesSection", () => new MyCoursesSection());
}