'use strict';

var app = angular.module('montaskApp');

/*This doesn't work.*/
app.controller('QuestionsCtrl', function($scope, $http)
    {    
      $http.get('data/doctor.json').success (function(data){
        $scope.doctors = data;
        console.log($scope.doctors);
      });

      $http.get('data/question.json').success (function(data){
        $scope.questions = data;
      });
 
  }
);

var doctors = [{
            'id': 1,
            'first_name':'Eva',
            'last_name':'Batts',
            'gender':'Female',
            'avatar':'crap.png',
            'joined_time': '2014-03-15T01:52:33Z'
        },
        {
            'id': 2,
            'first_name':'Andrew',
            'last_name':'Smith',
            'gender':'Male',
            'avatar':'blueface.png',
            'joined_time': '2012-07-08T01:52:33Z'
        },
        {
            'id': 3,
            'first_name':'Joseph',
            'last_name':'Bloom',
            'gender':'Male',
            'avatar': 'beatles.png',
            'joined_time': '2015-01-21T01:52:33Z'
        }
	];

var questions = [{
            'id': 1,
            'title':'Will insulin make my patient gain weight?',
            'content':'Content-Will insulin make my patient gain weight?',
            'doctor': doctors[0],
            'timestamp': '2015-07-15T01:52:33Z'
        },
        {
            'id': 2,
            'title':'Vegan diet in diabetes treatment?',
            'content':'Content-Vegan diet in diabetes treatment?',
            'doctor': doctors[2],
            'timestamp': '2015-07-28T01:52:33Z'
        },
        {
            'id': 3,
            'title':'Vegan diet to stop diabetes progress',
            'content':'Content-Vegan diet to stop diabetes progress',
            'doctor': doctors[1],
            'timestamp': '2015-07-20T01:52:33Z'
        },
        {
            'id': 4,
            'title':'Question 4?',
            'content':'Content-Will insulin make my patient gain weight?',
            'doctor': doctors[2],
            'timestamp': '2014-07-15T01:52:33Z'
        },
        {
            'id': 5,
            'title':'Question 5?',
            'content':'Content-Vegan diet in diabetes treatment?',
            'doctor': doctors[2],
            'timestamp': '2015-06-18T01:52:33Z'
        },
        {
            'id': 6,
            'title':'Question 6',
            'content':'Content-Vegan diet to stop diabetes progress',
            'doctor': doctors[0],
            'timestamp': '2015-09-02T01:52:33Z'
        },
        {
            'id': 7,
            'title':'Question 7',
            'content':'Content-Vegan diet to stop diabetes progress',
            'doctor': doctors[1],
            'timestamp': '2015-09-02T01:52:33Z'
        }
    ];

var answers = [{
            'id': 1,
            'content':'Answer of question 1',
            'question_id': questions[0],
            'doctor_id': doctors[2],
            'timestamp': '2015-08-15T01:52:33Z'
        },
        {
            'id': 2,
            'content':'Answer of question 3',
            'question_id': questions[2],
            'doctor_id': doctors[2],
            'timestamp': '2015-06-13T01:52:33Z'
        },
        {
            'id': 3,
            'content':'Answer of question 2',
            'question_id': questions[1],
            'doctor_id': doctors[1],
            'timestamp': '2015-02-20T01:52:33Z'
        },
        {
            'id': 4,
            'content':'Answer of question 1',
            'question_id': questions[0],
            'doctor_id': doctors[2],
            'timestamp': '2015-02-20T01:52:33Z'
        },
        {
            'id': 5,
            'content':'Answer of question 3',
            'question_id': questions[2],
            'doctor_id':doctors[3],
            'timestamp': '2015-02-20T01:52:33Z'
        },
        {
            'id': 6,
            'content':'Answer of question 3',
            'question_id': questions[2],
            'doctor_id': doctors[2],
            'timestamp': '2015-02-20T01:52:33Z'
        },  
        {
            'id': 7,
            'content':'Answer of question 3',
            'question_id': questions[2],
            'doctor_id': doctors[2],
            'timestamp': '2015-02-20T01:52:33Z'
        } 
    ];


app.controller('QuestionListCtrl', ['$scope', '$location',function($scope, $location) {
	
	$scope.go = function ( path ) {
  		$location.path( '/question' );
	};

	/*get list*/
	$scope.doctors = doctors;
	$scope.questions = questions;
	$scope.answers = answers;

	/*pagenation*/
	var pagesShown = 1;
	var pageSize = 3;
		    
	$scope.paginationLimit = function(data) {
		return pageSize * pagesShown;
	};

	$scope.hasMoreItemsToShow = function() {
		return pagesShown < ($scope.questions.length / pageSize);
	};

	$scope.showMoreItems = function() {
		pagesShown = pagesShown + 1;       
	};	

	/*sorting*/
    $scope.predicate = 'title';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
}]);


/*
app.filter('questionfilter',[ function () {

	return function(items, searchText) {

	    var filtered = [];            

		searchText = searchText.toLowerCase();
		angular.forEach(items, function(item) {
		    if( item.label.toLowerCase().indexOf(searchText) >= 0 ) { 
		    	filtered.push(item);
		    }
		});
	    return filtered;
	};
}]);*/