
angular.module('App').config( $routeProvider => {
$routeProvider
    .when('/login', {
        templateUrl: 'partials/pages/login.html',
        controller: 'LoginController'
    })
    .when('/dashboard', {
        templateUrl: 'partials/pages/Dashboard/dashboard.html',
        controller: 'DashboardController'
    })
    .otherwise({
        redirectTo: '/login'
    });
});