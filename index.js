require('dotenv').config();
const express = require('express');
const { error } = require('node:console');

const { PORT } = process.env

const app = express()

function middlewareLog(req, res, next) {
  const ruta = req.path
  console.log(`El usuario accede a ${ruta}`)
  next()
}

app.use(middlewareLog)

app.get('/', (req, res) => {
  console.log('Accedien do a la raiz')
  res.send('Página principal')
})

app.listen(PORT, (e) => {
  if (e) { console.log(error); process.exit(1) }
  console.log(`Sever corriendo en http://localhost:${PORT}`)
})