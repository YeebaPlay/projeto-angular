angular.module("veiculo").factory("ClienteService", function ($http, config) {
	
	var _get = function () {
		return $http.get(config.baseUrl + "/cliente");
	};

	var _save = function (cliente) {
		return $http.post(config.baseUrl + "/cliente/save", cliente);
	};

	var _delete = function (id) {
		return $http.delete(config.baseUrl + "/cliente/delete/" + id);
	};

	var _findByMesLocacao = function (mes) {
		return $http.get(config.baseUrl + "/cliente/find/by/mes/locacao/" + mes);
	};

	var _getCpf = function (cpf) {
		return $http.get(config.baseUrl + "/cliente/cpf/" + cpf);
	};

	var _findByLocacao = function () {
		return $http.get(config.baseUrl + "/cliente/find/by/locacao");
	};

	return {
		getCliente: _get,
		saveCliente: _save,
		deleteCliente: _delete,
		findByMesLocacao: _findByMesLocacao,
		getCpf: _getCpf,
		findByLocacao: _findByLocacao
	};
});