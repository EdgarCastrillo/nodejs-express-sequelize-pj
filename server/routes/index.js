const express = require('express')
const router = express.Router();

const Viaje = require('../models/Viajes')

module.exports = function() {
  
  router.get('/', (req, res) => {
    res.render('index')
  })

  router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
      pagina: 'Sobre nosotros'
    })
  })
  
  router.get('/viajes', (req, res) => {
    Viaje.findAll()
      .then(viajes => res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes: viajes
      }))
      .catch(error => console.log(error))
  })

  return router
}