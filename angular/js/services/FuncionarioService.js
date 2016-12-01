angular.module("veiculo").factory("FuncionarioService", function ($http, config) {
	
	var _get = function () {
		return $http.get(config.baseUrl + "/funcionario");
	};

	var _save = function (funcionario) {
		return $http.post(config.baseUrl + "/funcionario/save", funcionario);
	};

	var _delete = function (id) {
		return $http.delete(config.baseUrl + "/funcionario/delete/" + id);
	};

	var _locacaoCad = function (id) {
		return $http.get(config.baseUrl + "/funcionario/locacao_cad/" + id);
	};

	var _locacaoRec = function (id) {
		return $http.get(config.baseUrl + "/funcionario/locacao_rec/" + id);
	};

	return {
		getFuncionario: _get,
		saveFuncionario: _save,
		deleteFuncionario: _delete,
		locacaoCad: _locacaoCad,
		locacaoRec: _locacaoRec
	};
});