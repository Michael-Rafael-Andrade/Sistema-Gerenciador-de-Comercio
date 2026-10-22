var express = require('express');
var router = express.Router();
var controllerProdutos = require('../controller/controllerProdutos.js');

router.get('/', controllerProdutos.tela_produto);

// Tela para cadastrar produto
router.get('/cadastrar', controllerProdutos.tela_cadastrarProduto);



module.exports = router;