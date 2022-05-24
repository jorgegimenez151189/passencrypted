const {Usuario} = require('../model/Usuario')
const bcrypt = require('bcryptjs');

const getAllUsuario = async (req,res)=>{
    try {

        //Obtiene todas las pass de la BD
        const data = await Usuario.findAll()
    
        //Recorre
        let passencripted = []
        let encripted
        let password = []
        data.map( async e => {
            password.push({Password: e.dataValues.password})
            
            //Encripta contraseñas
            if (e.dataValues.password != null) {

                encripted = bcrypt.genSaltSync() //Utiliza 10 vueltas por defecto
                passencripted.push({password: bcrypt.hashSync(e.dataValues.password, encripted)})
                
                //ACTUALIZAR
                // await Usuario.update({
                //     password: passencripted, 
                // }, {
                //     where: {
                //         id: e.dataValues.id
                //     }
                // })


                // const update = await Usuario.findOne({
                //     where: {id}
                // })
                // update.set({password: passencripted})
                // await update.save()
            }
        })

        res.status(200).json({
            status: 'ok',
            antesEncriptar: password,
            despuesEncriptar: passencripted
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({msg: 'error'})
    }
    
}

module.exports = {
   getAllUsuario,
}