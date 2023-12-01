const express = require('express');
const router = express.Router();
const CasaController = require('./controllers/CasaController')
const InquilinoController = require('./controllers/InquilinoController')

router.get('/casas', CasaController.listarCasas);
router.get('/listar_todos_inquilinos', InquilinoController.listarInquilinos);
router.get('/listar_um_inquilinos/:id', InquilinoController.listarUmInquilino);
router.put('/atualizar_um_inquilinos/:id', InquilinoController.atualizarUmInquilino);
router.delete('/deletar_um_inquilinos/:id', InquilinoController.deletarUmInquilino);
router.post('/registrar_inquilino', InquilinoController.registrarInquilino);


module.exports = router;