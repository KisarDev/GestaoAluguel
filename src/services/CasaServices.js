const Casa = require('../models/casa'); // Importa o modelo

module.exports = {
  listarCasas: async () => {
    return Casa.findAll();
  },
  // Outras operações relacionadas a Casa
};