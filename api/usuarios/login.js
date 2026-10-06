const { verificarPass, crearToken } = require('./funciones')
const db = require('../../db/conexion')

const router = require('express').Router()

router.post('/', (req, res, next) => {
  const { user, pass } = req.body

  const sql = 'SELECT id, user, pass from usuarios where user = ?'

  db.query(sql, [user])
    .then(async ([result]) => {
      if (result.length === 1) {
        const userDB = result[0]
        const coincide = await verificarPass(pass, userDB.pass)
        if (coincide) {
          let token = crearToken(userDB)
          res.status(200).json({ token })
        } else {
          res.status(403).send('Contraseña incorrecta')
        }
      } else {
        res.status(401).send('Usuario no encontrado')
      }
    })
    .catch((e) => {
      console.error(e)
      res.status(500).send('Ocurrió un error: ', e)
    })
})

module.exports = router