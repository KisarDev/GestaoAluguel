const Inquilino = require('../models/inquilinos');

module.exports = {
  // ... outras funções do controlador

  registrarInquilino: async (req, res) => {
    const { nome, email, telefone } = req.body;

    try {
      // Crie um novo inquilino
      const novoInquilino = await Inquilino.create({
        nome,
        email,
        telefone,
      });

      res.status(201).json({ inquilino: novoInquilino });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao registrar inquilino.' });
    }
  },
};
