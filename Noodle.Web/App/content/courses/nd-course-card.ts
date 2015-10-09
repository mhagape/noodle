class NdCourseCard {
    public scope = {
        course: "="
    };
    public controller = "ndCourseCardVm";
    public controllerAs = "vm";
    public templateUrl = "App/content/courses/nd-course-card.html";
}

class NdCourseCardVm {

    private $$mdDialog: md.IDialogService;
    private $$ndApiResources: nd.constants.INdApiResources;
    public course;

    public static $inject = ["$scope", "$mdDialog", "ndApiResources"];
    constructor(
        $scope,
        $mdDialog: md.IDialogService,
        ndApiResources: nd.constants.INdApiResources) {

        var self = this;
        self.course = $scope.course;
        self.$$mdDialog = $mdDialog;
        self.$$ndApiResources = ndApiResources;

        self.init();
    }

    private init() {
        var self = this;
        self.canUserEnroll = self.courseHas(self.$$ndApiResources.ENROLL_COMMAND);
        self.canUserLeaveCourse = self.courseHas(self.$$ndApiResources.LEAVE_COURSE_COMMAND);
    }

    private courseHas(resourese: string): boolean {
        var self = this;
        for (var i = 0; i < self.course._links.length; i++) {
            if (self.course._links[i].rel === resourese) {
                return true;
            }
        }

        return false;
    }

    public canUserEnroll: boolean;
    public canUserLeaveCourse: boolean;

    public showRatingDialog(ev) {
        var self = this;
        self.$$mdDialog.show({
            controller: "starRatingDialogVm",
            controllerAs: "vm",
            templateUrl: "App/dialogs/starRatingDialog/star-rating-dialog.html",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            locals: {
                course: self.course
            }
        });
    }
}

export function register(app: ng.IModule) {
    app.controller("ndCourseCardVm", NdCourseCardVm);
    app.directive("ndCourseCard", () => new NdCourseCard());
}