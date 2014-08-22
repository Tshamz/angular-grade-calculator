'use strict';

/**
 * @ngdoc directive
 * @name gradeCalculatorApp.directive:resetfocus
 * @description directive finds first text or number based input in a form, and sets focus on it: initially, after submit, and after reset
 * # resetfocus
 */
angular.module('gradeCalculatorApp')
  .directive('resetfocus', function () {
    var directive = {
      restrict: 'A',
      link: function postLink(scope, iElement, iAttrs) {
        var firstInput;
        var formElements = iElement.context.elements;
        for (var i = 0; i < formElements.length; i++) {
          var inputType = formElements[i].type;
          if (inputType === 'email' || inputType === 'number' || inputType === 'text' || inputType === 'url') {
            firstInput = formElements[i];
            firstInput.focus();
            break;
          }
        }
        iElement.on('submit reset', function() {
          firstInput.focus();
        });
      }
    };
    return directive;
  });
