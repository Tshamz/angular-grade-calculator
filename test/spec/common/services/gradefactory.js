'use strict';

describe('Service: gradeFactory', function () {

  // load the service's module
  beforeEach(module('gradeCalculatorApp'));

  // instantiate service
  var gradeFactory;
  beforeEach(inject(function (_gradeFactory_) {
    gradeFactory = _gradeFactory_;
  }));

  it('should do something', function () {
    expect(!!gradeFactory).toBe(true);
  });

});
