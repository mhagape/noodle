 class LoginVm {
     constructor($scope) {
         $scope.myDate = new Date();
         $scope.minDate = new Date(
             $scope.myDate.getFullYear(),
             $scope.myDate.getMonth() - 2,
             $scope.myDate.getDate());
         $scope.maxDate = new Date(
             $scope.myDate.getFullYear(),
             $scope.myDate.getMonth() + 2,
             $scope.myDate.getDate());
     }
}

export function register(app: ng.IModule) {
    app.controller("loginVm", LoginVm);
 }