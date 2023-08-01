const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// URL de conexión a la base de datos MongoDB
const dbURL = 'mongodb://localhost:27017/admin'; // Cambia 'admin' por el nombre de tu base de datos

// Conexión a la base de datos
mongoose.connect(dbURL)
  .then(() => {
    console.log('Conexión a la base de datos establecida.');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Definir el esquema para el modelo Usuario
const usuarioSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// Crear el modelo Usuario a partir del esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Middleware para habilitar CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Ruta para la verificación de inicio de sesión
app.post('/verificar-inicio-sesion', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar el usuario en la base de datos por el username y password
    const usuario = await Usuario.findOne({ username, password });

    if (usuario) {
      // Usuario encontrado, enviarlo como respuesta
      res.json(usuario);
    } else {
      // Usuario no encontrado, enviar una respuesta con código 404 (No encontrado)
      res.status(404).json({ message: 'Credenciales inválidas' });
    }
  } catch (error) {
    console.error('Error al buscar el usuario en la base de datos:', error);
    res.status(500).json({ error: 'Error al verificar el inicio de sesión' });
  }
});

// Escuchar en un puerto específico
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
