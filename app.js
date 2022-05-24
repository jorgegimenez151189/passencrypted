const express = require('express')
const morgan = require("morgan")
const cors = require('cors')
const {sequelize} = require('./database/connect')
const route = require('./router/usuario')


require("dotenv").config(); 

//Crea el servidor express
const app = express();

app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));

//Cors
app.use(cors())
app.use(morgan('dev'))

//Ruta
app.use("/api",route)

//Lectura y parseo del body
app.use( express.json() )

sequelize.sync()

//Escuchar la petición
app.listen(process.env.PUERTO, async ()=>{
    console.log("Servidor Escuchando: ", process.env.PUERTO)
    //Conexión a la base de datos
    sequelize.authenticate()
        .then(()=>{
                    console.log("Conectado ")
                })
        .catch((error)=>{
                    console.log("no conecta a la db ", error)
                    })
    }
)




