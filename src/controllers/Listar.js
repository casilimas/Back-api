const User = require('../../src/models/esquemas');

// Listar todos los usuarios
const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await User.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al listar los usuarios', error });
  }
};

module.exports = {
    listarUsuarios
};

/*
Métodos Nativos
L1: require - Importa módulos
L4: async - Define función asincrónica
L5: try - Inicia bloque de código para manejar errores
L7: await - Espera a que se resuelva la promesa
L8: res.status - Establece el código de estado HTTP
L8: res.json - Envía una respuesta JSON
L9: catch - Captura errores
L10: res.status - Establece el código de estado HTTP
L10: res.json - Envía una respuesta JSON
L12: module.exports - Exporta módulos
Métodos No Nativos
L7: User.find - Busca todos los documentos en la base de datos
*/