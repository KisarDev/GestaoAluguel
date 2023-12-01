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

  listarInquilinos: async (req, res) => {
    try{
      const listaDeInquilinos = await Inquilino.findAll();
      
      res.status(200).send({inquilinos:listaDeInquilinos});
      
      }
    catch (error) {
      res.status(400).send({message:"Não há nenhum inquilino cadastrado"})}
      },


  listarUmInquilino: async (req,res) => {
    let id=req.params.id
    try {
      const inquilino = await Inquilino.findByPk(id);
      res.status(200).send({inquilino: inquilino})
    }
    catch (error){
      return res.status(400).send ({ message : "O ID informado não é válido!" })
    }
  },

  atualizarUmInquilino: async (req,res) => {
    let id=req.params.id
    try {
      const inquilino = await Inquilino.findByPk(id);
      const inquilinoAtualizado = await inquilino.update(req.body);
      res.status(200).send({inquilino: inquilinoAtualizado})
    }
    catch (error){
      return res.status(400).send ({ message : "O ID informado não é válido!" })
    }
  },

  deletarUmInquilino: async (req,res) => {
    let id=req.params.id
    try {
      const inquilino = await Inquilino.findByPk(id);
      await inquilino.destroy();
      
      res.status(200).send({message: "Inquilino deletado com sucesso"})
    }
    catch (error){
      return res.status(400).send ({ message : "O ID informado não é válido!" })
    }
  },
};
