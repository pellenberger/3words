'use strict';

/**
 * @ngdoc function
 * @name 3wordsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the 3wordsApp
 */
angular.module('3wordsApp')
  .controller('LoginCtrl', function ($rootScope, $scope, FirebaseService) {

    $scope.loginGoogle = function() {
      FirebaseService.getAuth().$authWithOAuthPopup("google").then(function(authData) {
        console.log("Logged in as:", authData);
      }).catch(function(error) {
        console.error("Authentication failed:", error);
      });
    }

    $scope.logoutGoogle = function() {
      FirebaseService.getAuth().$unauth();
    }

  });