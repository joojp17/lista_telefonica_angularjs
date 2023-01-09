angular.module("listaTelefonica").factory("contatosAPI", function () {
	var _contatos = [
		{"serial":"","nome":"Bruno","telefone":"1799992222","data":"25\/11\/2022","operadora":{"nome":"Oi","codigo":14,"categoria":"Celular"}},
		{"serial":"","nome":"Sandra","telefone":"1799993333","data":"25\/11\/2022","operadora":{"nome":"Vivo","codigo":15,"categoria":"Celular"}},
		{"serial":"","nome":"Mariana","telefone":"1699999999","data":"25\/11\/2022","operadora":{"nome":"Tim","codigo":41,"categoria":"Celular"}}
	];
	var _getContatos = function () {
		return _contatos;
	};

	var _saveContato = function (contato) {
		return _contatos.push(angular.copy(contato));
	};

	return {
		getContatos: _getContatos,
		saveContato: _saveContato
	};
});