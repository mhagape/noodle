import loginModuleDef = require("login/~module-definitions");
import contentModuleDef = require("content/~module-definitions");
import configModuleDef = require("config/~module-definitions");
import navigationModuleDef = require("navigation/~module-definitions");
import dialogsModuleDef = require("dialogs/~module-definitions");
import directivesModuleDef = require("directives/~module-definitions");
import servicesModuleDef = require("services/~module-definitions");
import constantsModuleDef = require("constants/~module-definitions");
import runModuleDef = require("run/~module-definitions");
import filtersModuleDef = require("filters/~module-definitions");
import interceptorsModuleDef = require("interceptors/~module-definitions");

export function init() {
    var appModule = angular.module("pssc", [
        "ui.router",
        "ui.materialize",
        "ngCookies",
        "ngMaterial",
        "satellizer"]);

    loginModuleDef.init(appModule);
    contentModuleDef.init(appModule);
    configModuleDef.init(appModule);
    navigationModuleDef.init(appModule);
    dialogsModuleDef.init(appModule);
    directivesModuleDef.init(appModule);
    servicesModuleDef.init(appModule);
    constantsModuleDef.init(appModule);
    runModuleDef.init(appModule);
    filtersModuleDef.init(appModule);
    interceptorsModuleDef.init(appModule);

    angular.bootstrap(document, ["pssc"]);
} 