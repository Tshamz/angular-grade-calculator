'use strict';

angular.module('gradeCalculatorApp')
  .controller('Ti83Ctrl', function ($scope) {

    $scope.calculatorState = {
      'output': '0',
      'runningTotal': null,
      'modifier': null,
      'operation': null,
      'operationChanged': false,
      'sequentialOperations': false,
      'isPristine': true,
    };

  });
