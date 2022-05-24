
const {sequelize, Sequelize} = require('../database/connect')

const Usuario = sequelize.define('usuario',{
  
    // Model attributes are defined here
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    confirmationcode: {
      type: Sequelize.STRING,
      allowNull: false
    },
    confirmationcodeexpiration:{
      type: Sequelize.INTEGER,
      allowNull: false
    },
    correo:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cuit:{
      type: Sequelize.STRING,
      allowNull: false
    },
    deleted_at:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    deleted_by:{
      type: Sequelize.INTEGER,
      allowNull: false
    },
    descripcion:{
      type: Sequelize.STRING,
      allowNull: false
    },
    emailstatus:{
        type: Sequelize.STRING,
        allowNull: false
    },
    facebook:{
        type: Sequelize.STRING,
        allowNull: false
    },
    instagram:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastaccess:{
        type: Sequelize.STRING,
        allowNull: false
    },
    marandu:{
        type: Sequelize.STRING,
        allowNull: false
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    passresetcode:{
        type: Sequelize.STRING,
        allowNull: false
    },
    passresetexpiration:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    profileimg:{
        type: Sequelize.STRING,
        allowNull: false
    },
    root:{
        type: Sequelize.STRING,
        allowNull: false
    },
    search_col:{
        type: Sequelize.STRING,
        allowNull: false
    },
    twitter:{
        type: Sequelize.STRING,
        allowNull: false
    },
    verify:{
        type: Sequelize.STRING,
        allowNull: false
    },
    version:{
        type: Sequelize.STRING,
        allowNull: false
    },
   

    },{
      freezeTableName: true,
      timestamps: false
    });

  module.exports = {
    Usuario
  } 