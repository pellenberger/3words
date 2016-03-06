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
        controllerAs: 'home',
        resolve: {
          "currentAuth" : function(FirebaseService) {
            return FirebaseService.getAuth().$requireAuth();
          }
        }
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
  .run(function($rootScope, $location, FirebaseService) {
    FirebaseService.getAuth().$onAuth(function(authData) {
      $rootScope.authData = authData;
    });

    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
      if (error === "AUTH_REQUIRED") {
        $location.path("/login");
      }
    });
  });
