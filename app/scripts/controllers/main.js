'use strict';

angular.module('employeeCvApp')
    .controller('MainCtrl', function ($scope, $http, $location, $route) {

        $scope.$on('$routeChangeSuccess', function (e, current, previous) {
            $scope.activeTab = $location.path().split('/')[1];
        });
    });