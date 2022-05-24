const {Sequelize} = require('sequelize')
require("dotenv").config();  

const sequelize = new Sequelize(process.env.DATABASE,process.env.USER_DB,process.env.PASS_DB,{
    host:'localhost', 
    dialect:'postgres',
    logging: false
})

module.exports = {
    sequelize,
    Sequelize
}