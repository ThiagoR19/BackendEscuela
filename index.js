require('dotenv').config();
const express = require('express');

const apiRouter = require('./api/main.js')

const { PORT } = process.env

const app = express()

app.use(express.json())

app.use('/api', apiRouter);

app.use((req, res, next) => {
  console.log('El usuario intentó acceder a ', req.path)
  res.status(404).send('Página no encontrada')
})

app.listen(PORT, (e) => {
  if (e) { console.log(error); process.exit(1) }
  console.log(`Sever corriendo en http://localhost:${PORT}`)
})