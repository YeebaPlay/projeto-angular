var s;
angular.module("veiculo").controller("CategoriaCtrl", function ($scope, CategoriaService) {
	s = $scope;
	var _this = {};
	$scope.categorias = [];
	$scope.findCategoria = function() {
		CategoriaService.getCategoria().then(function(result){
			if (result.data) {
			$scope.categorias = result.data;
			}
		});
	}
});