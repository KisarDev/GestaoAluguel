const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Importa a configuração do Sequelize

const Casa = sequelize.define('Casa', {
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  // Outros campos da tabela
});

module.exports = Casa;
