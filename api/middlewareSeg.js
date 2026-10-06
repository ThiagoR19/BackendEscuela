const jwt = require('jsonwebtoken')
const { TOKEN_SECRET } = process.env

function middlewareSeg(req, res, next) {
  const token = req.headers.authorization

  try {
    const user = jwt.verify(token, TOKEN_SECRET)
    console.log(user)
    next()
  } catch (e) {
    console.error(e)
    res.status(403).send('Ocurrió un error con el token')
  }

}

module.exports = middlewareSeg
