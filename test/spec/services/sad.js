'use strict';

describe('Service: Sad', function () {

  // load the service's module
  beforeEach(module('EmployeecvApp'));

  // instantiate service
  var Sad;
  beforeEach(inject(function (_Sad_) {
    Sad = _Sad_;
  }));

  it('should do something', function () {
    expect(!!Sad).toBe(true);
  });

});
