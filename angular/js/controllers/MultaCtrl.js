var s;
angular.module("veiculo").controller("MultaCtrl", function ($scope, MultaService) {
	s = $scope;
	var _this = {};
	$scope.multas = [];
	$scope.findMultas = function() {
		MultaService.getMulta().then(function(result){
			if (result.data) {
				$scope.multas = result.data;
			}
		});
	}

	$scope.deleteMulta = function(id) {
		MultaService.deleteMulta(id).then(function(result){
			$scope.findMultas();
		});
	}

	$scope.saveMulta = function(multa) {
		MultaService.saveMulta(multa).then(function(result){
			$scope.findMultas();
		});
	}

	$scope.up = function(item){
		$scope.obj = angular.copy(item);
	}

	$scope.findMultas();
});