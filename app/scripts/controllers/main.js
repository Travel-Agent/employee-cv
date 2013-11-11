'use strict';

angular.module('employeeCvApp')
    .controller('MainCtrl', function ($scope, $http) {
        $http.get('/api/awesomeThings')
            .success(function (awesomeThings) {
                console.log(awesomeThings);
                $scope.awesomeThings = awesomeThings;
            })
            .error(function (err) {
                console.log(err);
            })
    });