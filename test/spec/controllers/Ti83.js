'use strict';

describe('Controller: Ti83Ctrl', function () {

  // load the controller's module
  beforeEach(module('gradeCalculatorApp'));

  var Ti83Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Ti83Ctrl = $controller('Ti83Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
