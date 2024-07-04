const User = require('../../src/models/esquemas');

// Borrar un usuario por ID
const deleteUser = async (req, res) => {
  const { id } = req.body;

  try {
    const user = await User.findOneAndDelete({ id });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    res.status(200).json({ message: 'Usuario borrado exitosamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al borrar el usuario', error });
  }
};

module.exports = {
  deleteUser
};


/*
L1: require - Importa módulos
L1: const - Define constantes
L3: const - Define constantes
L4: const - Define constantes
L5: async - Define función asincrónica
L7: try - Inicia bloque de código para manejar errores
L9: if - Condicional
L10: return - Finaliza y devuelve valor
L11: res.status - Establece el código de estado HTTP
L11: res.json - Envía una respuesta JSON
L12: res.status - Establece el código de estado HTTP
L12: res.json - Envía una respuesta JSON
L13: catch - Captura errores
L14: res.status - Establece el código de estado HTTP
L14: res.json - Envía una respuesta JSON
L15: res.status - Establece el código de estado HTTP
L15: res.json - Envía una respuesta JSON
L16: module.exports - Exporta módulo

L8: User.findOneAndDelete - Elimina un documento en la base de datos


*/