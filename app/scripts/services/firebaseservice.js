'use strict';

/**
 * @ngdoc service
 * @name 3wordsApp.FirebaseService
 * @description
 * # FirebaseService
 * Service in the 3wordsApp.
 */
angular.module('3wordsApp')
  .service('FirebaseService', function ($rootScope, $firebaseAuth) {

    var baseUrl = "https://3words.firebaseio.com/";

    var ref = new Firebase(baseUrl);
    var auth = $firebaseAuth(ref);

    return {

      getUserRef: function(userId) {
        return new Firebase(baseUrl + "users/" + userId);
      },

      getAuth: function() {
        return auth;
      }
    }

  });
