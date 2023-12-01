require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');
const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.json());
server.use('/api', routes);
server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
} );

(async() => {
    const database = require('./sequelize');
    const Inquilino = require('./models/inquilinos');
    //await database.sync();
    // const novoInquilino = await Inquilino.create({
    //     nome: 'Souza',
    //     email: 'Souza@gmail.com',
    //     telefone: '1234567441890',

    // })

    
})();