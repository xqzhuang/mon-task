'use strict';

/**
 * @ngdoc function
 * @name montaskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the montaskApp
 */
angular.module('montaskApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
