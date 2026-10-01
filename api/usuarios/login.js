const { verificarPass } = require('./funciones')
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
        res.json({ coincide })
      } else {
        res.status(401).send('Usuario no encontrado')
      }
    })
    .catch((e) => {
      res.status(500).send('Ocurrió un error: ', e)
    })
})

module.exports = router