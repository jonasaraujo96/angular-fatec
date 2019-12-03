const express = require('express');
const router = express.Router();
const controller = require('../controllers/editoras');

router.get('/listar', controller.listar);
router.post('/criar', controller.criar);
router.patch('/atualizar', controller.atualizar);
router.post('/deletar', controller.deletar);

module.exports = router;