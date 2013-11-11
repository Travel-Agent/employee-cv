'use strict';

angular.module('employeeCvApp', [
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller : 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
