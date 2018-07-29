
angular.module('App').factory('DashboardService', function ($q, $http) {
    return {
        get: function () {
            var deferred = $q.defer();
            $http.get('').then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error)
            });
            return deferred.promise;
        }
    };
});