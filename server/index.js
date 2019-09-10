// Importar express
const express = require('express')
const path = require('path')
const routes = require('./routes')
const hbs = require('hbs');

// Configurar express
const app = express()

// Habilitar hbs
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Cargar rutas
app.use('/', routes())

app.listen(3000)


