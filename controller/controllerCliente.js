var clientes = require('../model/clienteMemoria');
const { buscarPorNome } = require('../model/produtoMemoria');

// Exibe a tela de cadastro
exports.telaCadastro = async function (req, res) {
    var contexto = {
        titulo: 'Cadastrar Cliente',
        clientes: await clientes.lista(),
    };
    res.render('cliente', contexto);
};

// cria e já exporta a função que será responsável pelo envio do formulário
exports.cadastrarCliente = async function (req, res) {
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
};

// botão deletar
exports.deletarCliente = async function (req, res) {
    var id = req.body.id;
    try {
        await clientes.deleta(id);
        res.redirect('/');
    } catch (error) {
        console.error(error.message);
        res.redirect('/');
    }
};


exports.atualizaCliente_get = async function (req, res) {
    const id = req.query.id;
    // const id = req.params.id;

    try {
        const clienteEncontrado = await clientes.consulta(id);
        const contexto = {
            titulo: 'Atualizar cliente',
            cliente: clienteEncontrado
        };
        res.render('clienteAtualiza', contexto);
    } catch (error) {
        console.error(error.message);
        res.redirect('/cliente/cadastrar');
    }
};


exports.atualizaCliente_post = async function (req, res) {
    var id = req.body.id;
    var nome = req.body.nome;

    try {
        await clientes.atualiza(id, nome);
        res.redirect('/');
    } catch (error) {
        console.error(error.message);
        res.redirect('/cliente/cadastrar');
    }
};

exports.tela_listarCliente_get = async function (req, res) {
    const termo = req.query.busca;
    let lista;

    if (termo) {
        lista = clientes.consultaPorIdOuNome(termo); // busca somente os lientes filtrados
    } else {
        lista = clientes.lista(); // traz todos os clientes cadastrados
    }

    const contexto = {
        titulo: 'Listar clientes',
        clientes: lista,
        termoBuscado: termo || '', // Mantém o termo buscado digitado na barra de busca
    }

    res.render('listarCliente', contexto);
}

