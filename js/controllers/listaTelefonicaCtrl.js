angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, coresAPI, serialGenerator) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];
    $scope.cores = [];

    var carregarContatos = function (){
        $scope.contatos = contatosAPI.getContatos();
        //if(!$scope.contatos.length) return $scope.error = "Não foi possível carregar os dados!";
    }

    var carregarOperadoras = function(){
        $scope.operadoras = operadorasAPI.getOperadoras();
    }

    var carregarCores = function(){
        $scope.cores = coresAPI.getCores();
    }
    
    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        //contato.data = new Date();
        contatosAPI.saveContato(contato);
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
        carregarContatos();
    };

    $scope.apagarContatos = function (contatos){
        $scope.contatos = contatos.filter(function (contato){
            if (!contato.selecionado) return contato;
        });
    };

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato){
            return contato.selecionado;
        });
    };

    $scope.ordenarPor = function (campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    window.onload = carregarContatos(), carregarOperadoras(), carregarCores();
    
});