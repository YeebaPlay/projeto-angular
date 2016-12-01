angular.module("veiculo").factory("MultaService", function ($http, config) {
	
	var _get = function () {
		return $http.get(config.baseUrl + "/multa");
	};

	var _save = function (multa) {
		return $http.post(config.baseUrl + "/multa/save", multa);
	};

	var _delete = function (id) {
		return $http.delete(config.baseUrl + "/multa/delete/" + id);
	};

	return {
		getMulta: _get,
		saveMulta: _save,
		deleteMulta: _delete
	};
});