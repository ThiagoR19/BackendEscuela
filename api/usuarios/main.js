const router = require('express').Router()

const db = require('../../db/conexion')

router.get('/', (req, res, next) => {

  db.query('SELECT * FROM usuarios')
    .then(([usuarios, campos]) => {
      console.log(usuarios)
      res.status(200).json({ usuarios })
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ e })
    })

})

router.post('/', (req, res, next) => {
  const { nombre, user, pass } = req.body

  const SQL = 'insert into usuarios (nombre, user, pass) values (?,?,?)'
  db.query(SQL, [nombre, user, pass])
    .then(([result, campos]) => {
      console.log(result, " ", campos)
      res.status(201).send('Usuario creado')
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ e })
    })
})

router.put('/:usuario_id', (req, res, next) => {
  const { usuario_id } = req.params
  const { nombre, user, pass } = req.body

  const SQL = 'update usuarios set nombre = ?, user = ?, pass = ? where id = ?'

  db.query(SQL, [nombre, user, pass, usuario_id])
    .then(([result, campos]) => {
      console.log(result, " ", campos)
      res.status(200).send('Usuario modificado')
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ e })
    })
})

router.delete('/:usuario_id', (req, res, next) => {
  const { usuario_id } = req.params
  const SQL = 'delete from usuarios where id = ?'

  db.query(SQL, [usuario_id])
    .then(([result, campos]) => {
      console.log(result, " ", campos)
      res.status(200).send('Usuario eliminado')
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ e })
    })
})

module.exports = router