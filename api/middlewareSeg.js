const tokenAuth = '123456'

function middlewareSeg(req, res, next) {
  const token = req.headers.authorization
  console.log({ token })

  if (token === tokenAuth) {
    next()
  } else {
    res.status(401).send('Sin autorizacion')
  }
}

module.exports = middlewareSeg
