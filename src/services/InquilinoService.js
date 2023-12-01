module.exports = {
    tentar_deletar: async (id) => {
        try {
            const inquilino = await Inquilino.findByPk(id);
            await inquilino.destroy();
            
            res.status(200).send({message: "Inquilino deletado com sucesso"})
          }
          catch (error){
            return res.status(400).send ({ message : "O ID informado não é válido!" })
          }
    }
  };

