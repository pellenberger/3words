'use strict';

/**
 * @ngdoc overview
 * @name 3wordsApp
 * @description
 * # 3wordsApp
 *
 * Main module of the application.
 */
angular
  .module('3wordsApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
