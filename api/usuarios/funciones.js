const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { SALT_ROUNDS, TOKEN_SECRET } = process.env

async function hashPass(passNueva) {
  const hash = await bcrypt.hash(passNueva, parseInt(SALT_ROUNDS));
  console.log(hash);
  return hash;
}

async function verificarPass(passNueva, passHash) {
  const coincide = bcrypt.compare(passNueva, passHash)
  return coincide;
}

function crearToken(user) {
  const payload = {
    id: user.id,
    nombre: user.nombre
  }

  const token = jwt.sign(payload, TOKEN_SECRET, { expiresIn: "2h" })
  return token
}

module.exports = { hashPass, verificarPass, crearToken }