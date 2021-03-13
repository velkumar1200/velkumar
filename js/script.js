var mainAngular = angular.module('mainApp',['ngRoute', 'ngAnimate']);
 
mainAngular.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/myself',{
            templateUrl: '/profile.html'
        })
        .when('/gallery',{
            templateUrl: '/gallery.html'
        })
        .otherwise({
            redirectTo: '/myself'
        });
 
    $locationProvider.hashPrefix('');
 
});