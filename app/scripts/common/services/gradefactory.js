'use strict';

/**
 * @ngdoc service
 * @name gradeCalculatorApp.gradeFactory
 * @description
 * # gradeFactory
 * Factory in the gradeCalculatorApp.
 */
angular.module('gradeCalculatorApp')
  .factory('gradeFactory', function () {
    var factory = {};

    factory.scale = [
      {grade: 'A', threshold: 0.93},
      {grade: 'A-', threshold: 0.90},
      {grade: 'B+', threshold: 0.87},
      {grade: 'B', threshold: 0.83},
      {grade: 'B-', threshold: 0.80},
      {grade: 'C+', threshold: 0.77},
      {grade: 'C', threshold: 0.73},
      {grade: 'C-', threshold: 0.70},
      {grade: 'D+', threshold: 0.67},
      {grade: 'D', threshold: 0.60},
      {grade: 'F', threshold: 0.00}
    ];

    factory.calculateLetterGrade = function(score) {
      for (var i = 0; i< factory.scale.length; i++) {
        if (score >= factory.scale[i].threshold) {
          return factory.scale[i].grade;
        }
      }
    };

    return factory;
  });
