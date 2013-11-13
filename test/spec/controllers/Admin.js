'use strict';

describe('Controller: AdminctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('employeeCvApp'));

  var AdminctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminctrlCtrl = $controller('AdminctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
