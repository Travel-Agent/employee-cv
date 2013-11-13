'use strict';

describe('Controller: HappyCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeCvApp'));

  var HappyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HappyCtrl = $controller('HappyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
