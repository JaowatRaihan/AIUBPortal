
angular.module('App').controller('LoginController', ['$scope', 'LoginService','$location', function ($scope, loginService,$location) {
    
    // $scope.go_back = function() { 
    //     window.history.back();
    // };

    $scope.User = 
    {
        Email:'',
        Password:''
    };

    $scope.SaveCommand = function () {
        alert($scope.User.Email);
        $location.path('/dashboard');
        // loginService.get().then(function (data) {
        //     $location.path('/dashboard');
        // }, function (error) {
        //     console.log(error);
        // });
    };
}]);