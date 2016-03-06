'use strict';

/**
 * @ngdoc function
 * @name 3wordsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the 3wordsApp
 */
angular.module('3wordsApp')
  .controller('LoginCtrl', function ($rootScope, $scope, $location, $firebaseObject, FirebaseService) {

    $scope.loginGoogle = function() {
      FirebaseService.getAuth().$authWithOAuthPopup("google").then(function(authData) {
        console.log("Logged in as:", authData);
        saveUserInfos(authData);
        $location.path("/home");
      }).catch(function(error) {
        console.error("Authentication failed:", error);
      });
    }

    $scope.logoutGoogle = function() {
      FirebaseService.getAuth().$unauth();
    }

    function saveUserInfos(authData) {
      var lastConnection = $firebaseObject(FirebaseService.getUserRef(authData.uid).child("lastConnection"));
      lastConnection.$value = moment().format("DD/MM/YYYY HH.mm.ss");
      lastConnection.$save();

      var username = $firebaseObject(FirebaseService.getUserRef(authData.uid).child("username"));
      username.$value = authData.google.displayName;
      username.$save();
    }

  });
