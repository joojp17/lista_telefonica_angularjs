angular.module("listaTelefonica").directive("uiName", function(){
    return{
        require:"ngModel",
        link: function(scope, element, attrs, ctrl){
         
            ctrl.$parsers.push(function(value){
                scope.nome = value;
                if(value.length){
                        var listaDeNomes = value.split(" ");
                        var listaDeNomesFormatada = listaDeNomes.map(function (nome){
                            if (/^(da|de|di|do|du|das|des|dis|dos|dus)$/i.test(nome)) return nome.toLowerCase();
                            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
                        });
                        return listaDeNomesFormatada.join(" ");          
                }
            });
        },
    };
});