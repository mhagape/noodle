 class NdSidenav {
     public scope = {}
     public controller = "ndSidenavVm";
     public controllerAs = "vm";
     public templateUrl ="App/navigation/ndSidenav/nd-sidenav.html";
 }

 class NdSidenavVm {
     
 }

export function register(app: ng.IModule) {
    app.controller("ndSidenavVm", NdSidenavVm);
    app.directive("ndSidenav", () => new NdSidenav());
}