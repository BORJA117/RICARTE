const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para verificar el inicio de sesión
router.post('/verificar-inicio-sesion', authController.verificarInicioSesion);

module.exports = router;
