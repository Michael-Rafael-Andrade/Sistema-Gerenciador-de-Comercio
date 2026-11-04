const produtos = require('../model/produtoMemoria');

exports.tela_produto = function (req, res) {
    const contexto = {
        titulo: 'Tela produto'
    }
    res.render('produto', contexto);
};

exports.tela_cadastrarProduto = async function (req, res) {
    var contexto = {
        titulo: 'Cadastrar produto',
        produtos: await produtos.lista(),
    }
    res.render('produto', contexto);
};

exports.post_cadastrar = async function (req, res) {
    var id = req.body.id;
    var descricao = req.body.descricao;
    var quantidade = req.body.quantidade;
    var valor = req.body.valor;

    await produtos.cria(id, descricao, quantidade, valor);
    res.redirect('/produtos/listar');
};

exports.listarProdutos = async function (req, res) {
    const termoBusca = req.query.busca; // Captura ?busca=texto da url 
    let lista;

    if(termoBusca){
        lista = produtos.buscarPorNome(termoBusca); // Traz apenas os filtrados
    } else {
        lista = produtos.lista(); // Traz todos os produtos cadastrados
    }

    contexto = {
        titulo: 'Listar produtos',
        produtos: await lista, // Passa a lista para o Handlebars
        termoBuscado: termoBusca || '', // Mantém o texto digitado na barra de busca
    };

    res.render('listarProduto', contexto);
};

exports.deletarProduto = async function (req, res) {
    var id = req.body.id;

    try {
        await produtos.deleta(id);
        res.redirect('/produtos/listar');
    } catch (error) {
        console.error(error.message);
        res.redirect('/produtos/listar');
    }
};

exports.atualizarProduto_get = async function (req, res) {
    const id = req.query.id;
    const produtoEncontrado = await produtos.buscaPorId(id);

    contexto = {
        titulo: 'Atualizar produto',
        produto: produtoEncontrado,
    }
    res.render('produtoAtualiza', contexto);
}

exports.atualizarProduto_post = async function (req, res) {
    const id = req.body.id;
    const descricao = req.body.descricao;
    const quantidade = req.body.quantidade;
    const valor = req.body.valor;

    await produtos.atualiza(id, descricao, quantidade, valor);
    await produtos.lista();

    res.redirect('/produtos/listar');
}
