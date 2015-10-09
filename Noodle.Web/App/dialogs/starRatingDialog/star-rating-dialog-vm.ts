class StarRatingDialogVm {

    constructor(course) {
        var self = this;

        self.course = course;
        self.rating = 0;
    }
    public course;
    public rating: number;
}

export function register(app: ng.IModule) {
    app.controller("starRatingDialogVm", StarRatingDialogVm);
}