const router = require('express').Router()
const productosRouter = require('./productos/main.js')
const usuariosRouter = require('./usuarios/main.js')
const alumnosRouter = require('./alumnos/main.js')
const usuariosLoginRouter = require('./usuarios/login')
const middlewareSeg = require('./middlewareSeg.js')

router.use('/productos', productosRouter)
router.use('/usuarios/login', usuariosLoginRouter)
router.use('/usuarios', middlewareSeg, usuariosRouter)
router.use('/alumnos', alumnosRouter)

module.exports = router