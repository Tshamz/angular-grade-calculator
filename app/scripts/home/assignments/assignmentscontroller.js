'use strict';

/**
 * @ngdoc function
 * @name gradeCalculatorApp.controller:AssignmentsCtrl
 * @description
 * # AssignmentsCtrl
 * Controller of the gradeCalculatorApp
 */
angular.module('gradeCalculatorApp')
  .controller('AssignmentsCtrl', function ($scope, assignmentsFactory) {

    $scope.gradedAssignments = assignmentsFactory.gradedAssignments;

    var initialFormState = {
      'assignment': null,
      'weight': null,
      'score': null
    };

    $scope.resetForm = function() {
      angular.copy(initialFormState, $scope.newRow);
      $scope.addAssignment.$setPristine(true);
    };
    $scope.addRow = function(newRow) {
      assignmentsFactory.addRow(newRow);
      $scope.resetForm();
    };
    $scope.removeRow = function(index) {
      assignmentsFactory.removeRow(index);
    };
    $scope.clearAll = function() {
      assignmentsFactory.clearAll();
    };

  });
