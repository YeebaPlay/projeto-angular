var s;
angular.module("veiculo").controller("LocacaoCtrl", function ($scope, LocacaoService) {
	s = $scope;
	var _this = {};
	$scope.locacoes = [];
	$scope.findLocacao = function() {
		LocacaoService.getLocacao().then(function(result){
			if (result.data) {
				$scope.locacoes = result.data;
			}
		});
	}
});