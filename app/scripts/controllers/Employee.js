'use strict';

angular.module('employeeCvApp')
    .controller('EmployeeCtrl', function ($scope, $http) {

        $scope.employeeOptions = [
            {name: 'name', type: 'text' },
            {name: 'age', type: 'number' },
            {name: 'education', type: 'options', options: ['Highschool', 'B.A', 'M.A', 'PhD'] },
        ]
    });