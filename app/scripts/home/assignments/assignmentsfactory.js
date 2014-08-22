'use strict';

/**
 * @ngdoc service
 * @name gradeCalculatorApp.assignmentsFactory
 * @description
 * # assignmentsFactory
 * Factory in the gradeCalculatorApp.
 */
angular.module('gradeCalculatorApp')
  .factory('assignmentsFactory', function (gradeFactory) {
    var factory = {};

    var resetState = {
      'earnedPoints': 0,
      'possiblePoints': 0,
      'percentage': 'N/A',
      'letter': 'N/A'
    };

    factory.gradedAssignments = [];
    factory.assignmentResults = {};

    var updateResults = function() {
      var earnedPoints = 0;
      var possiblePoints = 0;
      var rows = 0;
      angular.forEach(factory.gradedAssignments, function(assignment) {  // getting better, but still, fix this
        earnedPoints += assignment.score * assignment.weight;
        possiblePoints += assignment.weight;
        rows += 1;
      });
      factory.assignmentResults.earnedPoints = earnedPoints;
      factory.assignmentResults.possiblePoints = possiblePoints;
      factory.assignmentResults.weighted = earnedPoints + ' / ' + possiblePoints;
      factory.assignmentResults.percentage = earnedPoints / possiblePoints;
      factory.assignmentResults.letter = gradeFactory.calculateLetterGrade(earnedPoints / possiblePoints);
      if (!rows) {
        angular.copy(resetState, factory.assignmentResults);
      }
    };

    factory.addRow = function(newRow) {
      newRow.weight = newRow.weight / 100;
      newRow.score = newRow.score / 100;
      newRow.grade = gradeFactory.calculateLetterGrade(newRow.score);
      factory.gradedAssignments.push(angular.copy(newRow));
      updateResults();
    };
    factory.removeRow = function(index) {
      factory.gradedAssignments.splice(index, 1);
      updateResults();
    };
    factory.clearAll = function() {
      factory.gradedAssignments.length = 0;
      angular.copy(resetState, factory.assignmentResults);
    };

    return factory;
  });
