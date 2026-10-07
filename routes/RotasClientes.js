var express = require('express');
var router = express.Router();
var controllerCliente = require('../controller/controllerCliente');

// GET abre a página
router.get('/cadastrar', controllerCliente.telaCadastro);

// POST salva o formulário
router.post('/cadastrar', controllerCliente.cadastrarCliente);


module.exports = router;