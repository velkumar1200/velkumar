var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : 'profile.html'
    })
    .when('/mySelf', {
        template:'<strong> hello its myself </strong>'
    })
    .when('/gallery', {
        templateUrl : 'gallery.html'
    })
    .otherwise({
        redirectTo:'/'
    })
}]);