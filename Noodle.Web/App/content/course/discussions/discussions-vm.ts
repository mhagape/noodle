class DiscussionsVm {
    private $mdDialog;
    public static $inject = ["$mdDialog"];
    constructor($mdDialog) {
        var self = this;
        self.$mdDialog = $mdDialog;
    }
    public showNewThreadDialog(ev) {
        var self = this;
        self.$mdDialog.show({
            controller: "newTreadDialogVm",
            templateUrl: "App/dialogs/newThreadDialog/new-thread-dialog.html",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        });
    }
}
export function register(app: ng.IModule) {
    app.controller("discussionsVm", DiscussionsVm);
}