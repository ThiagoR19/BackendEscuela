const router = require('express').Router()
const productosRouter = require('./productos/main.js')
const usuariosRouter = require('./usuarios/main.js')
const alumnosRouter = require('./alumnos/main.js')

router.use('/productos', productosRouter)
router.use('/usuarios', usuariosRouter)
router.use('/alumnos', alumnosRouter)

module.exports = router