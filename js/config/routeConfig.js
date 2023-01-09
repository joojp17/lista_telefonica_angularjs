angular.module("listaTelefonica").config(function($routeProvider){
    $routeProvider.when("/contatos", {
        templateUrl: "view/contatos.html",
        controller: "listaTelefonicaCtrl",
        resolve:{
            contatos:function(contatosAPI){
                return contatosAPI.getContatos();
            },
            operadoras:function(operadorasAPI){
                return operadorasAPI.getOperadoras();
            },
            cores:function(coresAPI){
                return coresAPI.getCores();
            }
        }
    });
    $routeProvider.when("/novoContato", {
        templateUrl: "view/novoContato.html",
        controller: "novoContatoCtrl",
        resolve:{
            operadoras:function(operadorasAPI){
                return operadorasAPI.getOperadoras();
            },
            cores:function(coresAPI){
                return coresAPI.getCores();
            }
        }
    });
    $routeProvider.otherwise({redirectTo: "/contatos"});
});