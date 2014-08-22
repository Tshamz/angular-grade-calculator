'use strict';

describe('Service: resultsFactory', function () {

  // load the service's module
  beforeEach(module('gradeCalculatorApp'));

  // instantiate service
  var resultsFactory;
  beforeEach(inject(function (_resultsFactory_) {
    resultsFactory = _resultsFactory_;
  }));

  it('should do something', function () {
    expect(!!resultsFactory).toBe(true);
  });

});
