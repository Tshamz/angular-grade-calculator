'use strict';

/**
 * @ngdoc function
 * @name gradeCalculatorApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the gradeCalculatorApp
 */
angular.module('gradeCalculatorApp')
  .controller('HomeCtrl', function ($scope, $modal) {

    $scope.openModal = function(view, modalSize) {
      $modal.open({
        templateUrl: view,
        controller: 'ModalCtrl',
        size: modalSize
      });
    };

  });
