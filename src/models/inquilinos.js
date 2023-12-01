const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Certifique-se de ajustar o caminho conforme a sua estrutura de diretórios

const Inquilino = sequelize.define('Inquilino', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Inquilino;
