'use strict';

/**
 * @ngdoc function
 * @name gradeCalculatorApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the gradeCalculatorApp
 */
angular.module('gradeCalculatorApp')
  .controller('ResultsCtrl', function ($scope, assignmentsFactory) {

    $scope.results = assignmentsFactory.assignmentResults;

    $scope.results.earnedPoints = 0;
    $scope.results.possiblePoints = 0;
    $scope.results.percentage = 'N/A';
    $scope.results.letter = 'N/A';

  });
