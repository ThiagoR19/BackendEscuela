const router = require('express').Router()

const db = require('../../db/conexion')

router.get('/', (req, res, next) => {
  db.query('SELECT * FROM alumnos')
    .then(([alumnos, campos]) => {
      console.log(alumnos)
      res.status(200).json({ alumnos })
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ e })
    })

})

router.post('/', (req, res, next) => {
  const { nombres, apellidos, documento } = req.body

  const SQL = 'insert into alumnos (nombres, apellidos, documento) values (?,?,?)'
  db.query(SQL, [nombres, apellidos, documento])
    .then(([result, campos]) => {
      console.log(result, " ", campos)
      res.status(201).send('alumno creado')
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ e })
    })
})

router.put('/:alumno_id', (req, res, next) => {
  const { alumno_id } = req.params
  const { nombres, apellidos, documento } = req.body

  const SQL = 'update alumnos set nombres = ?, apellidos = ?, documento = ? where id = ?'

  db.query(SQL, [nombres, apellidos, documento, alumno_id])
    .then(([result, campos]) => {
      console.log(result, " ", campos)
      res.status(200).send('alumno modificado')
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ e })
    })
})

router.delete('/:alumno_id', (req, res, next) => {
  const { alumno_id } = req.params
  const SQL = 'delete from alumnos where id = ?'

  db.query(SQL, [alumno_id])
    .then(([result, campos]) => {
      console.log(result, " ", campos)
      res.status(200).send('alumno eliminado')
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ e })
    })
})

module.exports = router