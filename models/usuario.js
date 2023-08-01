const mongoose = require('mongoose');

// Define el esquema del modelo Usuario
const usuarioSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  nombre: { type: String, required: true },
  email: { type: String, required: true }
});

// Crea el modelo Usuario usando el esquema definido
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Exporta el modelo Usuario para que pueda ser utilizado en otras partes de tu aplicación
module.exports = Usuario;
