var s;
angular.module("veiculo").controller("VeiculoCtrl", function ($scope, VeiculoService, CategoriaService) {
	s = $scope;
	var _this = {};
	$scope.veiculos = [];
	$scope.findVeiculos = function() {
		VeiculoService.getVeiculos().then(function(result){
			if (result.data) {
				$scope.veiculos = result.data;
			}
		});
	}

	$scope.findCategorias = function() {
		CategoriaService.getCategoria().then(function(result){
			if (result.data) {
				$scope.categorias = result.data;
			}
		});
	}

	$scope.save = function(item) {
		VeiculoService.saveVeiculo(item).then(function(result){
			$scope.findVeiculos();
		});
	}

	$scope.up = function(item){
		$scope.obj = angular.copy(item);
	}
	$scope.findVeiculos();
	$scope.findCategorias();
});