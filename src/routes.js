const express = require('express');
const router = express.Router();
const CasaController = require('./controllers/CasaController')
const InquilinoController = require('./controllers/InquilinoController')

router.get('/casas', CasaController.listarCasas);
router.post('/inquilinos', InquilinoController.registrarInquilino);


module.exports = router;