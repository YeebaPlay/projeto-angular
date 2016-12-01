var s;
angular.module("veiculo").controller("FuncionarioCtrl", function ($scope, FuncionarioService) {
	s = $scope;
	var _this = {};
	$scope.funcionarios = [];
	$scope.findFuncionario = function() {
		FuncionarioService.getFuncionario().then(function(result){
			if (result.data) {
				$scope.funcionarios = result.data;
			}
		});
	}

	$scope.deleteFuncionario = function(id) {
		FuncionarioService.deleteFuncionario(id).then(function(result){
			if(result.data.conflito == true){
				alert("Não pode ser apagado!!! Possui dependencias no banco.");
			}
			$scope.findFuncionario();
		});
	}

	$scope.saveFuncionario = function(funcionario) {
		FuncionarioService.saveFuncionario(funcionario).then(function(result){
			$scope.findFuncionario();
		});
	}

	$scope.up = function (func){
		$scope.obj = angular.copy(func);
	}

	$scope.findFuncionario();

});