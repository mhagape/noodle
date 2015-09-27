export function register(app: ng.IModule) {
    app.config(["$stateProvider", "$urlRouterProvider", ($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state("content", {
                abstract: true,
                templateUrl: "App/content/content.html"
            })
            .state("content.dashboard", {
                url: "/dashboard",
                controller: "dashboardVm",
                controllerAs: "vm",
                templateUrl: "App/content/dashboard/dashboard.html"
            })
            .state("content.courses", {
                url: "/courses",
                templateUrl: "App/content/courses/courses.html",
                controller: "coursesVm",
                controllerAs: "vm"
            })
            .state("content.course", {
                url: "/course",
                abstract: true,
                templateUrl: "App/content/course/course.html",
                controller: "courseVm",
                controllerAs: "vm"
            })
            .state("content.course.info", {
                url: "/info",
                views: {
                    "outline": {
                        templateUrl: "App/content/course/outline/outline.html",
                        controller: "outlineVm",
                        controllerAs: "vm"
                    },
                    "discussions": {
                        templateUrl: "App/content/course/discussions/discussions.html",
                        controller: "discussionsVm",
                        controllerAs: "vm"
                    }
                }
            })
            .state("content.course.info.discussion", {
                url: "/discussion",
                views: {
                    "discussions@content.course": {
                        templateUrl: "App/content/course/discussion/discussion.html",
                        controller: "discussionVm",
                        controllerAs: "vm"
                    }
                }
            });
    }]);
}