angular.module("veiculo").factory("LocacaoService", function ($http, config) {
	
	var _get = function () {
		return $http.get(config.baseUrl + "/locacao");
	};

	var _save = function (locacao) {
		return $http.post(config.baseUrl + "/save", locacao);
	};

	var _delete = function (id) {
		return $http.get(config.baseUrl + "/delete/" + id);
	};

	var _findByFuncionariosId = function (id) {
		return $http.get(config.baseUrl + "/find/by/funcionario/" + id);
	};

	var _findByVeiculos = function (id) {
		return $http.get(config.baseUrl + "/find/by/veiculo/" + id);
	};

	return {
		getLocacao: _get,
		savaLocacao: _save,
		deleteLocacao: _delete,
		findByFuncionariosId: _findByFuncionariosId,
		findByVeiculoId: _findByVeiculos
	};
});