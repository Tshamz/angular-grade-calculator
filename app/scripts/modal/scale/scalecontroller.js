'use strict';

angular.module('gradeCalculatorApp')
  .controller('ScaleCtrl', function ($scope, gradeFactory) {

    $scope.scale = gradeFactory.scale;
    $scope.locked = true;


  });
