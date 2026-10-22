const produtos = require('../model/produtoMemoria');

exports.tela_produto = function(req, res){
    const contexto = {
        titulo: 'Tela produto'
    }
    res.render('produto', contexto);
}

exports.tela_cadastrarProduto = async function(req, res){
    var id = req.body.id;
    var descricao = req.body.descricao;
    var quantidade = req.body.quantidade;
    var valor = req.body.valor;

    await produtos.cria(id, descricao, quantidade, valor);
    var contexto = {
        titulo: 'Cadastrar produto',
        produtos: await produtos.lista(),
    }
}