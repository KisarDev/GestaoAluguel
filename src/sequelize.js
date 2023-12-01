const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

// Testa a conexão
sequelize
  .authenticate()
  .then(() => {
    console.log(`Conectado ao banco de dados: ${process.env.DB_NAME}`);
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });

module.exports = sequelize;
