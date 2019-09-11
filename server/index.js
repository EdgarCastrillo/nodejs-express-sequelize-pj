// Importar express
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./routes')

const configs = require('./config')

// db.authenticate()
//   .then(() => console.log('DB Conectada'))
//   .catch(error => console.log(error))

// Configurar express
const app = express()

// Habilitar hbs
app.set('view engine', 'pug');

// Añadir las vistas
app.set('views', path.join(__dirname, './views'));

// Cargar carpeta estatica 'public'
app.use(express.static('public'))

// Validar si estamos en desarollo o producción
const config = configs[app.get('env')]

// Crear variable para el sitio web
app.locals.titulo = config.nombre

// Muestra el año actual
app.use((req, res, next) => {
  // Crear una nueva fecha
  const fecha = new Date()
  res.locals.fechaActual = fecha.getFullYear()
  return next()
})

// Ejecutar body parser
app.use(bodyParser.urlencoded({extended: true}))

// Cargar rutas
app.use('/', routes())

app.listen(3000)


