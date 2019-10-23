angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function ($resource) { //retornar um objeto javascript com todas as açoes e propiedades

    return $resource('v1/fotos/:fotoId', null, {         // null = query string
        update: {
            method: 'PUT'
        }
    });

});