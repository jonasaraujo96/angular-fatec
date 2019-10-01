const express = require('express');
const router = express.Router();
const controller = require('../controllers/livros');

router.get('/listar', controller.listar);
router.post('/criar', controller.criar);

module.exports = router;