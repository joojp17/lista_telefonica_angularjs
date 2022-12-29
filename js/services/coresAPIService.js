angular.module("listaTelefonica").service("coresAPI", function(){
    var _cor = [
        {"nome": "Azul", "cor": "blue"},
        {"nome": "Amarelo", "cor": "yellow"},
        {"nome": "Vermelho", "cor": "red"},
        {"nome": "Verde", "cor": "green"},
        {"nome": "Rosa", "cor": "pink"}
    ];

    this.getCores = function(){
        return _cor;
    };
});