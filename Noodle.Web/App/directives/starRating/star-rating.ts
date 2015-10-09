class StarRating {
    public scope = {
        ratingValue: "=ngModel",
        max: "=?", // optional (default is 5)
        onRatingSelect: "&?",
        readonly: "=?"
    };
    public controller = "starRatingVm";
    public controllerAs = "vm";
    public templateUrl = "App/directives/starRating/star-rating.html";
    public link(scope, element, attributes) {
        if (scope.max == undefined) {
            scope.max = 5;
        }
        function updateStars() {
            scope.vm.stars = [];
            for (var i = 0; i < scope.max; i++) {
                scope.vm.stars.push({
                    filled: i < scope.ratingValue
                });
            }
        };
        scope.vm.toggle = index => {
            if (scope.readonly == undefined || scope.readonly === false) {
                scope.ratingValue = index + 1;
                scope.onRatingSelect({
                    rating: index + 1
                });
            }
        };
        scope.$watch("ratingValue", (oldValue, newValue) => {
            if (!angular.isUndefined(newValue)) {
                updateStars();
            }
        });
    }
}
class StarRatingVm {

    public static $inject = [];
    constructor() {
    }

}

export function register(app: ng.IModule) {
    app.controller("starRatingVm", StarRatingVm);
    app.directive("starRating", () => new StarRating());
}