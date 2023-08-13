const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const ObjectId = mongoose.Types.ObjectId; // Agrega esta línea para usar ObjectId

const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(bodyParser.json());
app.use(cors());

// URL de conexión a la base de datos MongoDB
const dbURL = 'mongodb://localhost:27017/admin'; // Cambia 'admin' por el nombre de tu base de datos

// Conexión a la base de datos
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión a la base de datos establecida.');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Crear el modelo de temperatura y humedad a partir del esquema

const temperaturaSchema = new mongoose.Schema({
  Humedad: { type: Number, required: true },
  Temperatura: { type: Number, required: true },
});

const Temperatura = mongoose.model('Temperatura', temperaturaSchema);

// Definir el esquema para el modelo Usuario
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellidos: { type: String, required: true },
  empresa: { type: String, required: true },
  username: { type: String, required: true },
  numeroTelefono: { type: String, required: true },
  password: { type: String, required: true },
});

// Crear el modelo Usuario a partir del esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Definir el esquema para el modelo Usuario
const formularioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellidos: { type: String, required: true },
  empresa: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: String, required: true },
  motivodeingreso: { type: String, required: true },
});

// Crear el modelo Usuario a partir del esquema
const Formulario = mongoose.model('Formulario', formularioSchema);

// Definir el esquema para el modelo AdminUsuario
const adminUsuarioSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// Crear el modelo AdminUsuario a partir del esquema
const AdminUsuario = mongoose.model('AdminUsuario', adminUsuarioSchema);

const ingresoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellidos: { type: String, required: true },
  oid: { type: String, required: true },
});

const Ingreso = mongoose.model('Ingreso', ingresoSchema);







// Middleware para habilitar CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.delete('/eliminar-ingreso/:id', async (req, res) => {
  const ingresoId = req.params.id;
  
  try {
    await Ingreso.findByIdAndDelete(ingresoId);
    res.status(200).json({ message: 'Ingreso eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el ingreso' });
  }
});




// Ruta para obtener todos los ingresos
app.get('/obtener-ingresos', async (req, res) => {
  try {
    const ingresos = await Ingreso.find(); // Cambia 'Ingreso' por el modelo correspondiente

    if (ingresos.length > 0) {
      res.json(ingresos);
    } else {
      res.status(404).json({ message: 'No se encontraron datos de ingresos' });
    }
  } catch (error) {
    console.error('Error al obtener los datos de ingresos:', error);
    res.status(500).json({ error: 'Error al obtener los datos de ingresos' });
  }
});


app.get('/obtener-datos-temperatura-humedad', async (req, res) => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
    const db = client.db('admin');
    const collection = db.collection('temperatura');
    
    const result = await collection.findOne({}); // Obtén el primer documento
    client.close();
    
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: 'No se encontraron datos' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

app.get('/obtener-datos-por-id/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const registro = await Temperatura.findById(id);

    if (registro) {
      res.json(registro);
    } else {
      res.status(404).json({ message: 'No se encontraron datos de temperatura y humedad' });
    }
  } catch (error) {
    console.error('Error al obtener datos por _id:', error);
    res.status(500).send('Error al obtener datos por _id');
  }
});

// Ruta para la verificación de inicio de sesión
app.post('/verificar-inicio-sesion', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar el usuario en la base de datos por el username
    const usuario = await Usuario.findOne({ username });

    if (usuario && bcrypt.compareSync(password, usuario.password)) {
      // Usuario encontrado y contraseña válida, enviarlo como respuesta
      res.json(usuario);
    } else {
      // Usuario no encontrado o contraseña inválida
      res.status(404).json({ message: 'Credenciales inválidas' });
    }
  } catch (error) {
    console.error('Error al buscar el usuario en la base de datos:', error);
    res.status(500).json({ error: 'Error al verificar el inicio de sesión' });
  }
});

// Ruta para registrar un nuevo usuario
app.post('/guardar-usuario', async (req, res) => {
  const { nombre, apellidos, empresa, username, numeroTelefono, password } = req.body;

  try {
    // Generar un hash seguro para la contraseña
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Crea una nueva instancia del modelo Usuario con los datos recibidos del formulario
    const nuevoUsuario = new Usuario({
      nombre,
      apellidos,
      empresa,
      username,
      numeroTelefono,
      password: hashedPassword,
    });

    // Guarda el nuevo usuario en la base de datos
    await nuevoUsuario.save();

    // Responde con un mensaje de éxito
    res.json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al guardar el usuario:', error);
    res.status(500).json({ error: 'Error al guardar el usuario' });
  }
});

// Ruta para la verificación de inicio de sesión de administradores
app.post('/verificar-inicio-sesion-admin', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar el administrador en la base de datos por el username y password
    const adminUsuario = await AdminUsuario.findOne({ username, password });

    if (adminUsuario) {
      // Administrador encontrado, enviarlo como respuesta
      res.json(adminUsuario);
    } else {
      // Administrador no encontrado, enviar una respuesta con código 404 (No encontrado)
      res.status(404).json({ message: 'Credenciales de administrador inválidas' });
    }
  } catch (error) {
    console.error('Error al buscar el administrador en la base de datos:', error);
    res.status(500).json({ error: 'Error al verificar el inicio de sesión de administrador' });
  }
});

app.post('/guardar-formulario', async (req, res) => {

  const { nombre, apellidos, empresa, correo, telefono, motivodeingreso } = req.body;

  try {
    // Crea una nueva instancia del modelo Formulario (si tienes uno definido)
    const nuevoFormulario = new Formulario({
      nombre,
      apellidos,
      empresa,
      correo,
      telefono,
      motivodeingreso,
    });

    // Guarda el nuevo formulario en la base de datos
    await nuevoFormulario.save();

    // Responde con un mensaje de éxito
    res.json({ message: 'Formulario guardado exitosamente' });
  } catch (error) {
    console.error('Error al guardar el formulario:', error);
    res.status(500).json({ error: 'Error al guardar el formulario' });
  }
});

app.get('/obtener-ultimo-formulario', async (req, res) => {
  try {
    // Ordena los formularios por _id en orden descendente para obtener el último
    const ultimoFormulario = await Formulario.findOne().sort({ _id: -1 });

    if (ultimoFormulario) {
      res.json(ultimoFormulario);
    } else {
      res.status(404).json({ message: 'No se encontraron formularios' });
    }
  } catch (error) {
    console.error('Error al obtener el último formulario:', error);
    res.status(500).json({ error: 'Error al obtener el último formulario' });
  }
});

app.get('/obtener-formulario/:formularioId', async (req, res) => {
  const formularioId = req.params.formularioId;

  try {
    const formulario = await Formulario.findById(formularioId);

    if (formulario) {
      res.json(formulario);
    } else {
      res.status(404).json({ message: 'No se encontró el formulario' });
    }
  } catch (error) {
    console.error('Error al obtener el formulario por ID:', error);
    res.status(500).json({ error: 'Error al obtener el formulario por ID' });
  }
});

// Escuchar en un puerto específico
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
