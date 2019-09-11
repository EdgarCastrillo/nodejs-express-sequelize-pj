const Testimonial = require('../models/Testimoniales')

exports.mostrarTestimoniales = (req, res) => {
  Testimonial.findAll()
    .then(testimoniales => res.render('testimoniales', {
      pagina: 'Testimoniales',
      testimoniales
    }))
}

exports.agregarTestimonial = (req, res) => {
  console.log(req.body)
  // Validar que todos los campos esten llenos
  let {nombre, correo, mensaje} = req.body

  let errores = []
  if(!nombre) {
    errores.push({'mensaje' : 'Agrega tu Nombre'})
  }
  if(!correo) {
    errores.push({'mensaje' : 'Agrega tu Correo'})
  }
  if(!mensaje) {
    errores.push({'mensaje' : 'Agrega tu Mensaje'})
  }

  // revisar por errores
  if(errores.length > 0) {
    // Muestra la vista con errores
    res.render('testimoniales', {
      errores,
      nombre,
      correo,
      mensaje
    })
  } else {
    // Almacenarlo en la BD
    Testimonial.create({
      nombre,
      correo,
      mensaje
    }) 
    .then(testimonial => res.redirect('/testimoniales'))
    .catch(error => console.log(error))
  }

}