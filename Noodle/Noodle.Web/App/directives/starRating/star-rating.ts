class StarRating {
    public scope = {};
    public controller = "starRatingVm";
    public controllerAs = "vm";
    public templateUrl = "App/directives/starRating/star-rating.html";
}
class StarRatingVm {

    private $mdDialog;
    public static $inject = ["$mdDialog"];
    constructor($mdDialog) {
        var self = this;
        self.$mdDialog = $mdDialog;
    }
    public showRatingDialog(ev) {
        var self = this;
        self.$mdDialog.show({
            controller: "starRatingDialogVm",
            templateUrl: "App/dialogs/starRatingDialog/star-rating-dialog.html",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        });
    }
}

export function register(app: ng.IModule) {
    app.controller("starRatingVm", StarRatingVm);
    app.directive("starRating", () => new StarRating());
}