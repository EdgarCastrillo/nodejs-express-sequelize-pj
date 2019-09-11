const Sequelize = require('sequelize')

// Nombre de la base de datos
module.exports = new Sequelize('agenciadeviajes', 'root', 'root', {
  host:'127.0.0.1',
  port: '8889',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
})