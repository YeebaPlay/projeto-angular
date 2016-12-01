angular.module("veiculo").factory("AvariaService", function ($http, config) {
	
	var _get = function () {
		return $http.get(config.baseUrl + "/avaria");
	};

	var _save = function (avaria) {
		return $http.post(config.baseUrl + "/avaria/save", avaria);
	};

	var _delete = function (id) {
		return $http.delete(config.baseUrl + "/avaria/delete/" + id);
	};

	var _findByLocacao = function (id) {
		return $http.get(config.baseUrl + "/find/by/locacao/" + id);
	};

	return {
		getAvaria: _get,
		saveAvaria: _save,
		deleteAvaria: _delete,
		findByLocacao: _findByLocacao
	};
});