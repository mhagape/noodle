requirejs.config({
    baseUrl: 'App',
    paths: {
        "angular": "../Scripts/angular",
        "angular-cookies": "../Scripts/angular-cookies",
        "angular-ui-router": "../Scripts/angular-ui-router",
        "materialize": "../Scripts/materialize/materialize",
        "angular-animate": "../Scripts/angular-animate",
        "angular-aria": "../Scripts/angular-aria",
        "angular-material": "../Scripts/lib/angular-material",
        "hammerjs": "../Scripts/hammer",
        "angular-materialize": "../Scripts/lib/angular-materialize",
        "satellizer": "../Scripts/lib/satellizer",
        "jquery": "../Scripts/jquery-2.1.4",

        "app": "app"
    },
    shim: {
        "angular": {
            exports: "angular",
        },
        "angular-cookies": {
            deps: ["angular"]
        },
        "angular-ui-router": {
            deps: ["angular"]
        },
        "angular-aria": {
            deps: ["angular"]
        },
        "angular-material": {
            deps: ["angular-aria", "angular-animate"]
        },
        "angular-animate": {
            deps: ["angular"]
        },

        "materialize": {
            deps: ["jquery", "hammerjs"]
        },
        "angular-materialize": {
            deps: [
                "angular",
                "materialize"]
        },
        "satellizer": {
            deps: ["angular"]
        },
        "app": {
            deps: [
                "angular",
                "angular-cookies",
                "angular-materialize",
                "angular-ui-router",
                "satellizer",
                "angular-material",
                "jquery"]
        }
    }
});

require(["app"], (app) => {
    app.init();
});
