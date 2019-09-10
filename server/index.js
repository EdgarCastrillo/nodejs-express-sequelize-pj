// Importar express
const express = require('express')

// Configurar express
const app = express()
app.use('/', (req, res) => {
    res.send('hola mundo node js')
})

app.listen(3000)


