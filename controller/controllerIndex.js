var clientes = require('../model/clienteMemoria');

// cria e já exporta a função que será responsável pela tela principal
exports.tela_principal = async function(req, res){
    // Cria um contexto para ser enviado como parametro para o arquivo 'index.hbs'
    
    await clientes.cria('1', 'Michael');
    var contexto = {
        titulo: 'Home',
        clientes: await clientes.lista(),
    }

    // renderiza o arquivo index.hbs, dentro da pasta view
    res.render('index', contexto);
}

// Página sobre
exports.tela_sobre = async function(req, res){
    contexto = {
        titulo: "Página sobre"
    }
    // renderiza o arquivo sobre.hbs, dentro da pasta view e passa o contexto para ser exibido dinâmicamente na tela.
    res.render('sobre', contexto);
}

exports.tela_contato = async function(req, res){
    contexto = {
        titulo: "Página contato"
    }
    
    // renderiz o arquivo contato e passa o titulo dinâmicamente para ser exibido na tela
    res.render('contato.hbs', contexto);
}

