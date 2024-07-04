const User = require('../../src/models/esquemas');

// Buscar usuario por ID
const buscarUsuarioPorId = async (req, res) => {
  const { id } = req.query;  // Cambiado para obtener el ID del cuerpo de la solicitud

  try {
    // Buscar el usuario por ID
    const user = await User.findOne({ id });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el usuario', error });
  }
};

module.exports = {
  buscarUsuarioPorId
};

/*
Métodos Nativos
L1: require - Importa módulos
L1: const - Define constantes
L4: const - Define constantes
L5: const - Define constantes
L7: async - Define función asincrónica
L7: try - Inicia bloque de código para manejar errores
L10: if - Condicional
L11: return - Finaliza y devuelve valor
L12: res.status - Establece el código de estado HTTP
L12: res.json - Envía una respuesta JSON
L15: res.status - Establece el código de estado HTTP
L15: res.json - Envía una respuesta JSON
L16: catch - Captura errores
L17: res.status - Establece el código de estado HTTP
L17: res.json - Envía una respuesta JSON
L20: module.exports - Exporta módulos

Métodos No Nativos
L9: User.findOne - Busca un documento en la base de datos
*/