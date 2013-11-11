'use strict';

angular.module('employeeCvApp', [
        'ngRoute'
    ])
    .config(function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/employee', {
                templateUrl: 'views/employee.html',
                controller : 'EmployeeCtrl'
            })

            .when('/employer', {
                templateUrl: 'views/employer.html',
                controller : 'EmployerCtrl'
            })
            .otherwise({
                redirectTo: '/employee'
            });

        $locationProvider.html5Mode(true);
    });
