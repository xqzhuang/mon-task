'use strict';

/**
 * @ngdoc function
 * @name montaskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the montaskApp
 */

var app = angular.module('montaskApp');


app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

app.controller('ShowModalCtrl', function ($scope, ModalService) {
    $scope.show = function(doctor) {
        $scope.doctor = doctor;

        console.log($scope.doctor);
        ModalService.showModal({
            templateUrl: 'views/modal.html',
            controller: 'ModalCtrl',
            inputs: {
                doctor: doctor,
            }
        }).then(function(modal) {
            modal.element.modal();
        });
    };
});

app.controller('ModalCtrl', ['$scope', function($scope, doctor) {
    console.log('ModalController');
    /*the value is not passed to here*/
    $scope.doctor = doctor;
    console.log($scope.doctor);

    $scope.close = function(result) {
      close(result, 500); // close, but give 500ms for bootstrap to animate
   };
 }]);

