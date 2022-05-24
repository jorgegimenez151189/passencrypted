const express = require("express")
const {getAllUsuario} = require("../controllers/usuarioControllers")
const route = express.Router();

route.put("/",getAllUsuario)

module.exports = route