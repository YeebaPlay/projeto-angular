angular.module("veiculo").config(function ($routeProvider) {
	$routeProvider.when("/veiculo", {
		templateUrl: "view/veiculo.html",
		controller: "VeiculoCtrl",
		resolve: {
			VeiculoService: function (VeiculoService) {
				return VeiculoService;
			},
			CategoriaService: function (CategoriaService){
				return CategoriaService;
			}
		}
	});
	$routeProvider.when("/multa", {
		templateUrl: "view/multa.html",
		controller: "MultaCtrl",
		resolve: {
			MultaService: function (MultaService) {
				return MultaService;
			}
		}
	});

	$routeProvider.when("/locacao", {
		templateUrl: "view/locacao.html",
		controller: "MultaCtrl",
		resolve: {
			LocacaoService: function (LocacaoService) {
				return LocacaoService;
			}
		}
	});

	$routeProvider.when("/funcionario", {
		templateUrl: "view/funcionario.html",
		controller: "FuncionarioCtrl",
		resolve: {
			FuncionarioService: function (FuncionarioService) {
				return FuncionarioService;
			}
		}
	});

	$routeProvider.when("/cliente", {
		templateUrl: "view/cliente.html",
		controller: "ClienteCtrl",
		resolve: {
			ClienteService: function (ClienteService) {
				return ClienteService;
			}
		}
	});

	$routeProvider.when("/avaria", {
		templateUrl: "view/avaria.html",
		controller: "AvariaCtrl",
		resolve: {
			AvariaService: function (AvariaService) {
				return AvariaService;
			}
		}
	});

	$routeProvider.when("/detalhesContato/:id", {
		templateUrl: "view/detalhesContato.html",
		controller: "detalhesContatoCtrl",
		resolve: {
			contato: function (contatosAPI, $route) {
				return contatosAPI.getContato($route.current.params.id);
			}
		}
	});

	$routeProvider.otherwise({redirectTo: "/veiculo"});
});