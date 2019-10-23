angular.module('alurapic', ['minhasDiretivas','ngAnimate','ngRoute', 'meusServicos'])
.config(function($routeProvider, $locationProvider){
    
    $locationProvider.html5Mode(true);                              //suportar url sem  /#/ suporte ao html5Mode 

    $routeProvider.when('/fotos', {                                 // segundo parâmetro é um objeto javascript
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });
    
    $routeProvider.when('/fotos/new', {                        // segundo parâmetro objeto javascript
        templateUrl: 'partials/registrarFoto.html',
        controller: 'FotoController'
    });

    $routeProvider.when('/fotos/edit/:fotoId', {                        // segundo parâmetro objeto javascript
        templateUrl: 'partials/registrarFoto.html',
        controller: 'FotoController'
    });

    $routeProvider.otherwise({ redirectTo: '/fotos'});               // ao inserir uma rota inválida ele redirenciona para /fotos   
    
});