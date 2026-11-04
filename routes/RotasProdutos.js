var express = require('express');
var router = express.Router();
var controllerProdutos = require('../controller/controllerProdutos.js');

router.get('/', controllerProdutos.tela_produto);

// Tela para cadastrar produto
router.get('/cadastrar', controllerProdutos.tela_cadastrarProduto);

// Tela para tratar os dados via POST do formulário
router.post('/cadastrar', controllerProdutos.post_cadastrar);

// Tela listar produtos
router.get('/listar', controllerProdutos.listarProdutos);

// deletar produto
router.post('/deletar', controllerProdutos.deletarProduto);

// atualizar produto
router.get('/atualizar', controllerProdutos.atualizarProduto_get);

// atualizar produto
router.post('/atualizar', controllerProdutos.atualizarProduto_post);

// buscar produto
// router.get('/buscar', controllerProdutos.tela_buscarPorProduto_get);


module.exports = router;