class CourseVm {
    public static $inject = ["ndToolbarService"];
    constructor(ndToolbarService: nd.services.INdToolbarService) {
        ndToolbarService.setTitle("Selected course");
    }
}

export function register(app: ng.IModule) {
    app.controller("courseVm", CourseVm);
}