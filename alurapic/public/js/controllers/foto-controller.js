angular.module('alurapic').controller('FotoController', function ($scope, $http, $routeParams, recursoFoto) {  /// registrando o controller no módulo principal da aplicação

    $scope.foto = {};
    $scope.mensagem = '';

    if ($routeParams.fotoId){
        $http.get('v1/fotos/'+ $routeParams.fotoId)   //isso é ajax XD
            .success(function (response) {
                $scope.foto = response;
                console.log(response);
            })
            .error(function (erro) {
                $scope.mensagem = "Erro ao recuperar dados da foto!"
                console.log(erro);
            });
    }

    $scope.submeter = function () {
        if ($scope.formulario.$valid){
            if ($scope.foto._id){

                recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function(){
                    $scope.mensagem = "foto atualizada com sucesso!";
                }), function(erro){
                    $scope.mensagem = "foto não foi atualizada!"
                    console.log(erro);
                }

                /*$http.put('v1/fotos/'+ $scope.foto._id, $scope.foto)   //isso é ajax XD
                    .success(function () {
                        $scope.mensagem = "foto atualizada com sucesso!";
                    })
                    .error(function (erro) {
                        $scope.mensagem = "foto não foi atualizada!"
                        console.log(erro);
                    });*/
            }else{
                recursoFoto.save($scope.foto, function () {
                    $scope.foto = {};
                    $scope.mensagem = 'Foto incluída com sucesso';
                }, function(erro){
                    $scope.mensagem = "foto não foi salva!"
                    console.log(erro);
                });

                /*$http.post('v1/fotos', $scope.foto)   //isso é ajax XD
                    .success(function () {
                        $scope.foto = {};
                        $scope.mensagem = "foto salva com sucesso!";
                    })
                    .error(function (erro) {
                        $scope.mensagem = "foto não foi salva!"
                        console.log(erro);
                    });*/
            }
        }
    }

});


