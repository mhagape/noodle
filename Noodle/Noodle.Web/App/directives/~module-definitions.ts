import starRating = require("directives/starRating/star-rating");

export function init(app: ng.IModule) {
    starRating.register(app);
}