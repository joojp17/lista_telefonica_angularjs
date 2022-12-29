angular.module("listaTelefonica").service("operadorasAPI", function () {
	var _operadoras = [
		{"nome":"Oi","codigo":14,"categoria":"Celular","preco":3},
		{"nome":"Vivo","codigo":15,"categoria":"Celular","preco":2},
		{"nome":"Tim","codigo":41,"categoria":"Celular","preco":3},
		{"nome":"GVT","codigo":25,"categoria":"Fixo","preco":3},
		{"nome":"Embratel","codigo":21,"categoria":"Fixo","preco":2}
	];
	
	this.getOperadoras = function () {
		return _operadoras;
	};
});