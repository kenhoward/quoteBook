var app = angular.module('quoteBook')

app.controller('mainCtrl', function($scope, dataService){
		$scope.quotes = dataService.getData();
		//$scope.inputText = '';
		$scope.showFilter = false;
		$scope.showAdd = false;
		$scope.showRemove = false;

		$scope.showFilterQuote = function(){
			$scope.showFilter = !$scope.showFilter;
			$scope.showAdd = false;
			$scope.showRemove = false;
		}

		$scope.showAddQuote = function(){
			$scope.showAdd = !$scope.showAdd;
			$scope.showFilter = false;
			$scope.showRemove = false;
		}

		$scope.showRemoveQuote = function(){
			$scope.showRemove = !$scope.showRemove;
			$scope.showFilter = false;
			$scope.showAdd = false;
		}
		//$scope.getData();

		$scope.addQuote = function() {
			if($scope.quote.text && $scope.quote.author){ // <-- don't understand
				dataService.addData({
					text: $scope.quote.text, 
					author: $scope.quote.author});
				$scope.showAdd = false;
				$scope.quote.text = '';
				$scope.quote.author = '';
			}
			
		}

		$scope.removeQuote = function() {
			if($scope.quote.text && $scope.quote.author){ // <-- don't understand
				dataService.removeData($scope.quote.text, $scope.quote.author);
				$scope.showRemove = false;
				$scope.quote.text = '';
				$scope.quote.author = '';
			}

		}


});


	// 	$scope.addData = function(){
	// 	dataService.addData($scope.addInput); //I chose 'addInput' (not from dataService.js)

	// }
	// 	$scope.removeData = function(){
	// 	dataService.removeData($scope.text);
	// }
