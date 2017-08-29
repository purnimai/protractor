'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
module('phonecatApp').
component('login', {
    templateUrl: 'login/login.component.html',
    controller: ['$cookies', '$location', '$rootScope',
        function loginController($cookies, $location, $rootScope) {
            var self = this;
            this.username = '';
            this.password = '';
            this.error = '';

            self.formSubmit = function() {
                this.error = '';
                if (this.username === 'admin' && this.password === '123') {
                    $cookies.put('username', this.username);
                    $rootScope.isLogged = true;
                    $location.path('/phones');
                } else {
                    this.error = 'Username and Password not Matched';
                }
            };
        }
    ],
    controllerAs: 'ctrl'
});