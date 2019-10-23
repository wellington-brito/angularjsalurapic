angular.module('alurapic').controller('FotosController', function ($scope, $http, recursoFoto) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';



    recursoFoto.query(function (fotos) {
        $scope.fotos = fotos;
    }), function (erro) {
        console.log(erro);
    };

    /*$http.get('/v1/fotos')
    .success(function(retorno) {
        console.log(retorno);
        $scope.fotos = retorno; // não precisa fazer retorno.data
    })
    .error(function(erro) {
        console.log(erro);
    });*/


    $scope.remover = function (foto) {

        recursoFoto.delete({fotoId: foto._id}, function () {
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
        }), function (erro) {
            console.log(error);
            console.log('Não foi possível remover a foto' + foto.titulo);
            $scope.mensagem = 'Não foi possível remover a foto' + foto.titulo;
        }

        /*$http.delete('/v1/fotos/'+foto._id)
            .success(function () {
                var indiceFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceFoto, 1);
                $scope.mensagem = 'Foto '+foto.titulo+' foi removida com sucesso';
            })
            .error(function (error) {
                console.log(error);
                $scope.mensagem = 'Não foi possível remover a foto'+ foto.titulo;
            })*/
    }


});