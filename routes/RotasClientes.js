var express = require('express');
var router = express.Router();
var controllerCliente = require('../controller/controllerCliente');

// GET abre a página
router.get('/cadastrar', controllerCliente.telaCadastro);

// POST salva o formulário
router.post('/cadastrar', controllerCliente.cadastrarCliente);

// POST deleta o cliente da lista
router.post('/deletar', controllerCliente.deletarCliente);

// POST atualiza o cliente da lista
router.post('/atualiza', controllerCliente.atualizaCliente_post);

// GET atualiza o cliente na view
router.get('/atualiza', controllerCliente.atualizaCliente_get);

// listar cliente
router.get('/listar', controllerCliente.tela_listarCliente_get);




module.exports = router;