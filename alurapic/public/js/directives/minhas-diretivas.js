// Declaração de diretivas para persolizar templates htmls
angular.module('minhasDiretivas', [])
	.directive('meuPainel', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;


		ddo.scope = {
            titulo: '@'
        };

        ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	})
	.directive('minhaFoto', function() {

		var ddo = {};

		ddo.restrict = "AE";

		ddo.scope = {
			titulo: '@',
			url: '@'
        };

        ddo.templateUrl = 'js/directives/minha-foto.html';

		return ddo;
	})
	.directive('meuBotaoPerigo', function() {

		var ddo = {};

		ddo.restrict = "AE";

		ddo.scope = {
			nome: '@', // string
			acao: '&'  //& para expressão como parametro

        };

        ddo.templateUrl = 'js/directives/meu-botao-perigo.html';

		return ddo;
	});