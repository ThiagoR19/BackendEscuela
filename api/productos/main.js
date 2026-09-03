const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.send('ok')
})

router.post('/', (req, res, next) => {
  res.send('ok')
})

router.put('/', (req, res, next) => {
  res.send('ok')
})

router.delete('/', (req, res, next) => {
  res.send('ok')
})

module.exports = router