class MyCoursesSection {
    public scope = {};
    public controller = "myCoursesSectionVm";
    public controllerAs = "vm";
    public templateUrl = "App/content/dashboard/sections/myCourseSection/my-course-section.html";
}

class MyCoursesSectionVm {

}

export function register(app: ng.IModule) {
    app.controller("myCoursesSectionVm", MyCoursesSectionVm);
    app.directive("myCoursesSection", () => new MyCoursesSection());
}