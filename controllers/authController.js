const Usuario = require('../models/usuario');

// Controlador para verificar el inicio de sesión
exports.verificarInicioSesion = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar al usuario en la base de datos
    const user = await Usuario.findOne({ username, password });

    if (user) {
      console.log('Inicio de sesión exitoso. Usuario:', user);
      res.status(200).json({ message: 'Inicio de sesión exitoso', user });
    } else {
      console.log('Credenciales inválidas. Inicio de sesión fallido.');
      res.status(401).json({ message: 'Credenciales inválidas. Inicio de sesión fallido.' });
    }
  } catch (error) {
    console.error('Error al verificar el inicio de sesión:', error);
    res.status(500).json({ error: 'Error al verificar el inicio de sesión' });
  }
};
