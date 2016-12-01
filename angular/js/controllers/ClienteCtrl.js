var s;
angular.module("veiculo").controller("ClienteCtrl", function ($scope, ClienteService) {
	s = $scope;
	var _this = {};
	$scope.clientes = [];
	$scope.findClientes = function() {
		ClienteService.getCliente().then(function(result){
			if (result.data) {
				$scope.clientes = result.data;
			}
		});
	}
	
	$scope.deleteCliente = function(id) {
		ClienteService.deleteCliente(id).then(function(result){
			$scope.findClientes();
		});
	}

	$scope.saveCliente = function(cliente) {
		ClienteService.saveCliente(cliente).then(function(result){
			$scope.findClientes();
		});
	}

	$scope.up = function(item){
		$scope.obj = angular.copy(item);
	}

	$scope.findClientes();
});