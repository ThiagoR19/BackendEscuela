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

router.put('/', (req, res, next) => {
  res.send('ok')
})

router.delete('/', (req, res, next) => {
  res.send('ok')
})

module.exports = router