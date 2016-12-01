
angular.module("veiculo").factory("CategoriaService", function ($http, config) {
	
	var _get = function () {
		return $http.get(config.baseUrl + "/categoria");
	};

	var _save = function (categoria) {
		return $http.post(config.baseUrl + "/save", categoria);
	};

	var _delete = function (id) {
		return $http.get(config.baseUrl + "/delete/" + id);
	};

	return {
		getCategoria: _get,
		saveCategoria: _save,
		deleteCategoria: _delete
	};
});