const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configuración del middleware
app.use(bodyParser.json());
app.use(cors());

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

// Importar y utilizar las rutas de autenticación
const authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);

// Puerto en el que se ejecutará el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
