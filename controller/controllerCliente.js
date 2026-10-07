var clientes = require('../model/clienteMemoria');

// Exibe a tela de cadastro
exports.telaCadastro = async function(req, res){
    var contexto = {
        titulo: 'Cadastrar Cliente',
        clientes: await clientes.lista(),
    };
    res.render('cliente', contexto);
};

// cria e já exporta a função que será responsável pelo envio do formulário
exports.cadastrarCliente = async function(req, res) {
    // Cria um contexto para ser enviado como parametro para o arquivo 'cliente.hbs'
    var id = req.body.id;
    var nome = req.body.nome;

    await clientes.cria(id, nome);
    var contexto = {
        titulo: 'Cadastrar Cliente',
        clientes: await clientes.lista(),
    }

    // renderiza o arquivo index.hbs, dentro da pasta view
    res.render('cliente', contexto);
}


