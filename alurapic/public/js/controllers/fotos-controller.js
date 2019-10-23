angular.module('alurapic').controller('FotosController', function($scope, $http) {
	
	$scope.fotos = [];
	$scope.filtro = '';

	$http.get('/v1/fotos')
	.success(function(retorno) {
		console.log(retorno);
		$scope.fotos = retorno; // não precisa fazer retorno.data
	})
	.error(function(erro) {
		console.log(erro);
	});

	$scope.remover = function(foto){
		$http.delete('/v1/fotos/'+foto._id)
			.success(function () {
				console.log('Foto '+foto.titulo+' foi removida com sucesso');
			})
			.error(function (error) {
				console.log(error);
				console.log('Não foi possível remover a foto'+ foto.titulo);
			})
	}


});