const User = require('../../src/models/esquemas'); 
const { emailValidator, nameValidator, surnameValidator, idValidator } = require('../helpers/validacion');

// Modificar usuario existente
const updateUser = async (req, res) => {
  const { nombres, apellidos, id, correo, profesion } = req.body;

  // Validaciones
  if (nombres && !nameValidator(nombres)) {
    return res.status(400).json({ message: 'Nombres deben contener solo letras y tener un máximo de 50 caracteres.' });
  }

  if (apellidos && !surnameValidator(apellidos)) {
    return res.status(400).json({ message: 'Apellidos deben contener solo letras y tener un máximo de 50 caracteres.' });
  }

  if (id && !idValidator(id)) {
    return res.status(400).json({ message: 'ID debe contener solo números y tener un máximo de 11 caracteres.' });
  }

  if (correo && !emailValidator(correo)) {
    return res.status(400).json({ message: 'Correo debe ser una dirección válida.' });
  }

  try {
    // Verificar si el usuario existe
    const user = await User.findOne({ id });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    // Verificar si el nuevo ID ya existe (si el ID está siendo actualizado)
    if (id && id !== user.id) {
      const existingUserById = await User.findOne({ id });
      if (existingUserById) {
        return res.status(400).json({ message: 'ID ya existe.' });
      }
    }

    // Verificar si el nuevo correo ya existe (si el correo está siendo actualizado)
    if (correo && correo !== user.correo) {
      const existingUserByEmail = await User.findOne({ correo });
      if (existingUserByEmail) {
        return res.status(400).json({ message: 'Correo ya existe.' });
      }
    }

    // Actualizar los campos del usuario
    if (nombres) user.nombres = nombres;
    if (apellidos) user.apellidos = apellidos;
    if (correo) user.correo = correo;
    if (profesion) user.profesion = profesion;

    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: 'Error al actualizar el usuario', error });
  }
};

module.exports = {
  updateUser
};


/*
Metodos Nativos
L1: require - Importa módulos
L5: async - Define función asincrónica
L7: 
L11: return - Finaliza y devuelve valor
L11: res.status - Establece el código de estado HTTP
L11: res.json - Envía una respuesta JSON
L16: return - Finaliza y devuelve valor
L16: res.status - Establece el código de estado HTTP
L16: res.json - Envía una respuesta JSON
L21: return - Finaliza y devuelve valor
L21: res.status - Establece el código de estado HTTP
L21: res.json - Envía una respuesta JSON
L26: return - Finaliza y devuelve valor
L26: res.status - Establece el código de estado HTTP
L26: res.json - Envía una respuesta JSON
L30: try - Inicia bloque de código para manejar errores
L33: await - Espera a que se resuelva la promesa
L35: return - Finaliza y devuelve valor
L35: res.status - Establece el código de estado HTTP
L35: res.json - Envía una respuesta JSON
L39: await - Espera a que se resuelva la promesa
L41: return - Finaliza y devuelve valor
L41: res.status - Establece el código de estado HTTP
L41: res.json - Envía una respuesta JSON
L46: await - Espera a que se resuelva la promesa
L48: return - Finaliza y devuelve valor
L48: res.status - Establece el código de estado HTTP
L48: res.json - Envía una respuesta JSON
L53: user.nombres = nombres - Actualiza el campo
L55: user.apellidos = apellidos - Actualiza el campo
L57: user.correo = correo - Actualiza el campo
L59: user.profesion = profesion - Actualiza el campo
L61: await - Espera a que se resuelva la promesa
L62: res.status - Establece el código de estado HTTP
L62: res.send - Envía una respuesta
L64: catch - Captura errores
L65: res.status - Establece el código de estado HTTP
L65: res.send - Envía una respuesta
L67: module.exports - Exporta módulos

Métodos No Nativos
L3: emailValidator - Valida el formato del correo electrónico
L3: nameValidator - Valida el formato del nombre
L3: surnameValidator - Valida el formato del apellido
L3: idValidator - Valida el formato del ID
L33: User.findOne - Busca un documento en la base de datos
L39: User.findOne - Busca un documento en la base de datos
L46: User.findOne - Busca un documento en la base de datos
L61: user.save - Guarda el usuario en la base de datos
*/