'use strict';

/**
 * @ngdoc function
 * @name montaskApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the montaskApp
 */
angular.module('montaskApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
