angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatos, operadoras, cores, serialGenerator) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = $scope.contatos = contatos.filter(function (contato){
        if (!contato.selecionado) return contato;
    });
    $scope.operadoras = operadoras;
    $scope.cores = cores;

    var generateSerial = function(contatos){
        if(contatos){
            contatos.forEach(function(item){
                item.serial = serialGenerator.generate();
            });
        }
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

    generateSerial($scope.contatos);
});