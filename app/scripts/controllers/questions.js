'use strict';

angular.module('montaskApp')
  .controller('QuestionsCtrl', function ($scope) {

    $scope.questionLists = [
      {name: 'My shelf'},
      {name: 'All questions'},
    ];
  });
