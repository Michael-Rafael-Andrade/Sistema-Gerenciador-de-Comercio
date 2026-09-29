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
