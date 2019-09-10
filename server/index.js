// Importar express
const express = require('express')
const path = require('path')
const routes = require('./routes')
const hbs = require('hbs');

// Configurar express
const app = express()

// Habilitar hbs
app.set('view engine', 'pug');

// Añadir las vistas
app.set('views', path.join(__dirname, './views'));

// Cargar carpeta estatica 'public'
app.use(express.static('public'))


// Cargar rutas
app.use('/', routes())

app.listen(3000)


