import starRatingDialogVm = require("dialogs/starRatingDialog/star-rating-dialog-vm");
import newThreadDialogVm = require("dialogs/newThreadDialog/new-thread-dialog-vm");

export function init(app: ng.IModule) {
    starRatingDialogVm.register(app);
    newThreadDialogVm.register(app);
}