'use strict';

/**
 * @ngdoc filter
 * @name gradeCalculatorApp.filter:percentage
 * @function
 * @description
 * # percentage
 * Filter in the gradeCalculatorApp.
 */
angular.module('gradeCalculatorApp')
  .filter('percentage', function ($window) {
    return function (input, decimals, suffix) {
      var result = '';
      decimals = angular.isNumber(decimals) ? decimals :  2;
      suffix = suffix === 'none' ? '' : '%';
      if ($window.isNaN(input)) {
        result = input;
      } else {
        result = Math.round(input * Math.pow(10, decimals + 2))/Math.pow(10, decimals) + suffix;
      }
      return result;
    };
  });
