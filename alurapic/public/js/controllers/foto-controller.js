angular.module('alurapic').controller('FotoController', function ($scope, $http) {  /// registrando o controller no módulo principal da aplicação

    $scope.foto = {};
    $scope.mensagem = '';


    $scope.submeter = function () {
        if ($scope.formulario.$valid){
            $http.post('/v1/fotos', $scope.foto)   //isso é ajax XD
                .success(function () {
                    $scope.foto = {};
                   $scope.mensagem = "foto salva com sucesso!";
                })
                .error(function (erro) {
                    $scope.mensagem = "foto não foi salva!"
                    console.log(erro);
                });
        }
    }

});


