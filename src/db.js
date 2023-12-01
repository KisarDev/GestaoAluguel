const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});

connection.connect((error)=>{
    if (error) throw error;
    console.log(`conectado ao Banco de Dados: ${process.env.DB_NAME}`)
});

module.exports = connection;