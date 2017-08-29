'use strict';

angular.
module('phonecatApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/phones', {
            template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
        }).
        when('/login', {
            template: '<login></login>'
        }).
        otherwise('/phones');
    }
]).run(['$cookies', '$rootScope', '$location', function($cookies, $rootScope, $location) {
    if ($cookies.get('username')) {
        $rootScope.isLogged = true;
    }

    $rootScope.logout = function() {
        $rootScope.isLogged = false;
        $cookies.remove('username');
        $location.path('/login');
    };
}]);