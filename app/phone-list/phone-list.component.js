'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('phoneList').
component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone', '$location', '$cookies',
        function PhoneListController(Phone, $location, $cookies) {
            this.phones = Phone.query();
            this.orderProp = 'age';

            if (!$cookies.get('username')) {
                $location.path('/login');
            }

        }
    ]
});