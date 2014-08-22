'use strict';

/**
 * @ngdoc overview
 * @name gradeCalculatorApp
 * @description
 * # gradeCalculatorApp
 *
 * Main module of the application.
 */
angular
  .module('gradeCalculatorApp', [
    'ngAnimate',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/home/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
