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
    'ngRoute',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
  )
  .run(function($rootScope, FirebaseService) {
    FirebaseService.getAuth().$onAuth(function(authData) {
      $rootScope.authData = authData;
    });
  });
