import loginModuleDef = require("login/~module-definitions");
import contentModuleDef = require("content/~module-definitions");
import configModuleDef = require("config/~module-definitions");
import navigationModuleDef = require("navigation/~module-definitions");
import dialogsModuleDef = require("dialogs/~module-definitions");
import directivesModuleDef = require("directives/~module-definitions");

export function init() {
    var appModule = angular.module("pssc", ["ui.router", "ui.materialize", "ngMaterial"]);

    loginModuleDef.init(appModule);
    contentModuleDef.init(appModule);
    configModuleDef.init(appModule);
    navigationModuleDef.init(appModule);
    dialogsModuleDef.init(appModule);
    directivesModuleDef.init(appModule);

    angular.bootstrap(document, ["pssc"]);
} 