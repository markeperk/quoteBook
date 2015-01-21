var app = angular.module('quoteBook');


app.controller('mainCtrl', function($scope, mainService){
	$scope.getData = function() {
		$scope.quotes = mainService.getData();
	}

	$scope.getData();

	$scope.addData = function() {
		mainService.addData($scope.addQuote.text, $scope.addQuote.author);
		$scope.addQuote.text = '';
		$scope.addQuote.author = '';
	};
	

	$scope.removeData = function() {
		mainService.removeData($scope.addQuote.text || $scope.addQuote.author);
		$scope.addQuote.text = '';
		$scope.addQuote.author = '';
	};

	// $scope.quote = { //not helping.. why?
	// 	text: mainService.getData();
	// };

});

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

