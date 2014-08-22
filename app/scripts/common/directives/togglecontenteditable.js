'use strict';

/**
 * @ngdoc directive
 * @name gradeCalculatorApp.directive:togglecontenteditable
 * @description directive controls the true/false state of a set of contenteditable attributes
 * # togglecontenteditable
 */
angular.module('gradeCalculatorApp')
  .directive('togglecontenteditable', function () {
    var directive = {
      restrict: 'A',
      link: function postLink(scope, iElement, iAttrs) {
        if (!scope.locked) {
          return;
        }
        iElement.on('click', function() {
          this.className = 'toggle-icon glyphicon glyphicon-ok text-success';
          scope.locked = false;
        });
      }
    };
    return directive;
  });
