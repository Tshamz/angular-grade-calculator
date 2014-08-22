'use strict';

describe('Service: assignmentFactory', function () {

  // load the service's module
  beforeEach(module('gradeCalculatorApp'));

  // instantiate service
  var assignmentFactory;
  beforeEach(inject(function (_assignmentFactory_) {
    assignmentFactory = _assignmentFactory_;
  }));

  it('should do something', function () {
    expect(!!assignmentFactory).toBe(true);
  });

});
