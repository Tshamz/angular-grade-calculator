'use strict';

/**
 * @ngdoc filter
 * @name gradeCalculatorApp.filter:capitalize
 * @function
 * @description
 * # capitalize
 * Filter in the gradeCalculatorApp.
 */
angular.module('gradeCalculatorApp')
  .filter('capitalize', function () {
    return function(input) {
      var result = '';
      var individualWords = input.split(' ');
      for (var i = 0; i < individualWords.length; i++) {
        individualWords[i] = individualWords[i].toLowerCase();
        individualWords[i] = individualWords[i].charAt(0).toUpperCase() + individualWords[i].substring(1);
      }
      result = individualWords.join(' ');
      return result;
    };
  });
