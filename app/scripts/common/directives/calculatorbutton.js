'use strict';

/**
 * @ngdoc directive
 * @name gradeCalculatorApp.directive:calculatorbutton
 * @description directive controls the true/false state of a set of contenteditable attributes
 * # calculatorbutton
 */
angular.module('gradeCalculatorApp')
  .directive('calculatorbutton', function () {
    var directive = {
      restrict: 'A',
      link: function postLink(scope, iElement, iAttrs) {
        var calculatorState = scope.calculatorState;
        var operations = {
          '\u002B': function(val1, val2) {  // Addition
            return val1 + val2;
          },
          '\u2212': function(val1, val2) {  // Subtraction
            return val1 - val2;
          },
          '\xD7': function(val1, val2) {  // Multiplication
            return val1 * val2;
          },
          '\xF7': function(val1, val2) {  // Division
            if (val2 === 0) {
              return 'Error';
            } else {
              return val1 / val2;
            }
          }
        };
        var buttonActions = {
          'operation': function(value, iElement) {
            if (calculatorState.sequentialOperations) {  // for when you string lots of operations together (e.g. 3+2+5-1=?)
              calculatorState.modifier = parseFloat(calculatorState.output);
              calculatorState.runningTotal = operations[calculatorState.operation](calculatorState.runningTotal, calculatorState.modifier);
              calculatorState.output = calculatorState.runningTotal.toString();
            } else {  // storing the first value...
              calculatorState.runningTotal = parseFloat(calculatorState.output);
            }
            calculatorState.operationChanged = (calculatorState.operation !== null && calculatorState.operation !== value);
            calculatorState.operation = value;
            calculatorState.isPristine = true;
            calculatorState.sequentialOperations = true;
            iElement.css('border-color', '#000');
          },
          'solve': function() {
            if (!calculatorState.runningTotal) {  // nothing to calculate
              return;
            } else if (calculatorState.operationChanged && calculatorState.isPristine) {  // weird case where after being in a pristine state, someone hits a different operation than they did last time, doesn't type a new number, and hits equals.The iPhone handles this case by doing the new operation to the running total in the same amount (e.g. 324+324, 24x24, 3-3, 9000/9000)
              calculatorState.modifier = calculatorState.runningTotal;
            } else if (!calculatorState.isPristine) {  // calculator is no longer pristine if new number has been added; this is normal
              calculatorState.modifier = parseFloat(calculatorState.output);
            }
            calculatorState.runningTotal = operations[calculatorState.operation](calculatorState.runningTotal, calculatorState.modifier);
            calculatorState.output = calculatorState.runningTotal.toString();
            calculatorState.isPristine = true;
            calculatorState.sequentialOperations = false;
          },
          'number': function(value) {
            if (value === '0' && calculatorState.output === '0') {
              return;
            }
            calculatorState.output = calculatorState.isPristine ? startValue(value) : appendValue(value);
          },
          'decimal': function() {
            if (calculatorState.output.indexOf('.') === -1) {
              calculatorState.output = calculatorState.isPristine ? startValue('0.') : appendValue();
            }
          },
          'posneg': function() {
            calculatorState.output = calculatorState.output * -1;
          },
          'clear': function() {
            angular.copy(initialCalculatorState, calculatorState);
          }
        };
        // Initial Calculator State
        var initialCalculatorState = {
          'output': '0',
          'runningTotal': null,
          'modifier': null,
          'operation': null,
          'operationChanged': false,
          'sequentialOperations': false,
          'isPristine': true,
        };
        var appendValue = function(value) {
          return calculatorState.output += value;
        };
        var startValue = function(value) {
          calculatorState.isPristine = false;
          return value;
        };
        iElement.on('click', function() {
          var activeButton = iAttrs.calculatorbutton;
          angular.element('input[type="button"]').css('border-color', 'transparent');
          buttonActions[activeButton](iAttrs.value, iElement);
        });
      }
    };
    return directive;
  });
