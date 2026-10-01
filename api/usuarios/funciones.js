// hash de contraseñas
// comprobacion de contraseña
// creacion de token de auth

const bcrypt = require('bcrypt')
const { SALT_ROUNDS } = process.env

async function hashPass(passNueva) {
  const hash = await bcrypt.hash(passNueva, parseInt(SALT_ROUNDS));
  console.log(hash);
  return hash;
}

async function verificarPass(passNueva, passHash) {
  const coincide = bcrypt.compare(passNueva, passHash)
  return coincide;
}

module.exports = { hashPass, verificarPass }