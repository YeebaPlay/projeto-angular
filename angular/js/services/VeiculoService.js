angular.module("veiculo").factory("VeiculoService", function ($http, config) {
	
	var _getVeiculos = function () {
		return $http.get(config.baseUrl + "/veiculo");
	};

	var _saveVeiculo = function (veiculo) {
		return $http.post(config.baseUrl + "/veiculo/save", veiculo);
	};

	var _deleteVeiculo = function (id) {
		return $http.get(config.baseUrl + "/veiculo/delete/" + id);
	};

	return {
		getVeiculos: _getVeiculos,
		saveVeiculo: _saveVeiculo,
		deleteVeiculo: _deleteVeiculo
	};
});