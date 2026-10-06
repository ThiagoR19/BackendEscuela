const router = require('express').Router()
const expressFileUpload = require('express-fileupload')
const path = require('path')
const ditArchivos = path.join(__dirname, '..', '..', 'archivos')

router.use(expressFileUpload())

router.get('/', (req, res, next) => {
  res.send('ok')
})

router.post('/', (req, res, next) => {
  const files = req.files

  if (!files) {
    return res.status(403).send('No hay archivos')
  }
  const nombre = files.archivos.name
  const rutaCompleta = path.join(ditArchivos, nombre)
  files.archivos.mv(rutaCompleta, (e) => {
    console.error(e)
    res.status(500).send('Ocurrió un error al guardar')
  })
  res.send('ok')
})

router.put('/', (req, res, next) => {
  res.send('ok')
})

router.delete('/', (req, res, next) => {
  res.send('ok')
})

module.exports = router