class CourseVm {
    public static $inject = ["ndToolbarService"];
    constructor(ndToolbarService: nd.services.INdToolbarSrv) {
        ndToolbarService.setTitle("Selected course");
    }
}

export function register(app: ng.IModule) {
    app.controller("courseVm", CourseVm);
}