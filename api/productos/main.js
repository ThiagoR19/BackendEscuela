const router = require('express').Router()
const expressFileUpload = require('express-fileupload')
const path = require('path')
const dirArchivos = path.join(__dirname, '..', '..', 'archivos')
const fs = require('fs')


router.use(expressFileUpload())

router.get('/:producto_id', (req, res, next) => {
  const { producto_id } = req.params

  const nombre = producto_id + '.png'
  const rutaCompleta = path.join(dirArchivos, nombre)
  if (fs.existsSync(rutaCompleta)) {
    console.log('existe')
    res.send(rutaCompleta)
  } else {
    console.log('no existe')
    res.send('ok')
  }


  res.send('ok')
})

router.post('/', (req, res, next) => {
  const files = req.files

  if (!files) {
    return res.status(403).send('No hay archivos')
  }

  const extension = files.archivo.name.split('.').pop()
  const nombre = Date.now().toString() + '.' + extension

  const rutaCompleta = path.join(dirArchivos, nombre)

  files.archivo.mv(rutaCompleta, (e) => {
    if (e) {
      console.error(e)
      res.status(500).send('Ocurrió un error al guardar')
    } else {
      res.send('ok')
    }
  })
})

router.put('/', (req, res, next) => {
  res.send('ok')
})

router.delete('/', (req, res, next) => {
  res.send('ok')
})

module.exports = router