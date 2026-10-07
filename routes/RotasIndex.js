var express = require('express');
var router = express.Router();
var controllerIndex = require('../controller/controllerIndex.js');

/* GET home page. */
router.get('/', controllerIndex.tela_principal);

/* GET sobre page */
router.get('/sobre', controllerIndex.tela_sobre);

/* GET contato page */
router.get('/contato', controllerIndex.tela_contato);


module.exports = router;
