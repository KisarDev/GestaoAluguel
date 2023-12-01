const CasaService = require('../services/CasaServices');

module.exports = {
  listarCasas: async (req, res) => {
    let json = {
      error: '',
      result: [],
    };

    try {
      const casas = await CasaService.listarCasas({
        attributes: ['codigo'], // Especifique os campos desejados
      });

      json.result = casas;
      res.json(json);
    } catch (error) {
      json.error = error.message;
      res.status(500).json(json);
    }
  },
};
