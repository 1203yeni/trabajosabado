const Sequelize = require('sequelize');
const usuario = require('../models').User;

module.exports={
    //consultar todos los usuarios
    List(_,res,){
        return usuario.findAll({})
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))

    },
    //Consultar usuario por nombre
    ListAT(req,next){
        return usuario.findAll({
            where:{
                firstName:req.parms.firstName
            }
        })
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
        
    }
}