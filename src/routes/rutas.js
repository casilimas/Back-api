const express = require('express');
const rateLimit = require('express-rate-limit'); // Importar express-rate-limit
const router = express.Router();
const userController = require('../../src/controllers/Crear');
const listUsersController = require('../../src/controllers/Listar');
const updateUserController = require('../../src/controllers/Editar');
const deleteUserController = require('../../src/controllers/Borrar'); // Verificar esta importación
const buscarUsuarioController = require('../../src/controllers/Buscar');
const authenticateToken = require('../../src/controllers/middleware/token');

// Configuración de la limitación de tasa
const createAccountLimiter = rateLimit({
  windowMs: parseInt(process.env.REQUEST_INTERVAL_MS) || 30000, // 30 segundos
  max: 1, // Limita cada IP a una solicitud por `windowMs`
  message: 'Debe esperar unos segundos para registrar nuevo usuario'
});

// Ruta para crear un nuevo usuario con limitación de tasa
router.post('/api/crear', createAccountLimiter, userController.createUser);

// Ruta para listar todos los usuarios (protegida con token)
router.get('/api/listar', authenticateToken, listUsersController.listarUsuarios);

// Ruta para actualizar un usuario existente
router.put('/api/actualizar', updateUserController.updateUser);

// Ruta para borrar un usuario
router.delete('/api/borrar', deleteUserController.deleteUser); // Verificar esta definición

// Ruta para buscar un usuario por ID
router.get('/api/buscar', buscarUsuarioController.buscarUsuarioPorId);

// Ruta de prueba
router.get('/', (req, res) => {
  res.send('ruta de prueba');
});

module.exports = router;



