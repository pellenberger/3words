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

    var ref = new Firebase("https://3words.firebaseio.com");
    var auth = $firebaseAuth(ref);

    return {

      getRef: function() {
        return ref;
      },

      getAuth: function() {
        return auth;
      }
    }

  });
