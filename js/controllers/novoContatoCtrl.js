angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, serialGenerator, $location, operadoras, cores, $routeParams) {
    $scope.operadoras = operadoras;
    $scope.cores = cores;

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contatosAPI.saveContato(contato);
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
        $location.path("/contatos")
    };

    $scope.verificaPhone = function(){
       return $scope.errorPhone = ( !$scope.phone.length ) ? 'Telefone obrigatório!' : 'Digite um telefone válido!';
    };

    $scope.verificaData = function(){
        return $scope.errorData = ( !$scope.data.length ) ? 'Data obrigatório!' : 'Digite uma data válida!';
    };

    $scope.verificaNome = function(){
        return $scope.errorNome = ( !$scope.nome.length ) ? 'Nome obrigatório!' : 'Digite um nome válido';
    };
    
});