'use strict';

angular.module('employeeCvApp')
    .controller('EmployerCtrl', function ($scope, $http) {

        $scope.weight = {};
        $scope.fieldNames = ['Age', 'Education', 'Languages', 'Computer Skills', 'Adaptivity']
    });