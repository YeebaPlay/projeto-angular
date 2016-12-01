var s;
angular.module("veiculo").controller("AvariaCtrl", function ($scope, AvariaService) {
	s = $scope;
	var _this = {};
	$scope.avarias = [];
	$scope.findAvarias = function() {
		AvariaService.getAvaria().then(function(result){
			if (result.data) {
				$scope.avarias = result.data;
			}
		});
	}

	$scope.deleteAvaria = function(id) {
		AvariaService.deleteAvaria(id).then(function(result){
			$scope.findAvarias();
		});
	}

	$scope.saveAvaria = function(avaria) {
		AvariaService.saveAvaria(avaria).then(function(result){
			$scope.findAvarias();
		});
	}

	$scope.up = function(item){
		$scope.obj = angular.copy(item);
	}

	$scope.findAvarias();
});