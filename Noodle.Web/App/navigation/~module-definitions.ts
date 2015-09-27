import ndToolbar = require("navigation/ndToolbar/nd-toolbar");
import ndSidenav = require("navigation/ndSidenav/nd-sidenav");
import ndSidenavService = require("navigation/ndSidenav/nd-sidenav-service");
import ndToolbarService = require("navigation/ndToolbar/nd-toolbar-service");

export function init(app: ng.IModule) {
    ndToolbar.register(app);
    ndSidenav.register(app);
    ndSidenavService.register(app);
    ndToolbarService.register(app);
}