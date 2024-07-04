const User = require('../../src/models/esquemas'); 
const { emailValidator, nameValidator, idValidator } = require('../helpers/validacion');

// Crear nuevos usuarios
const createUser = async (req, res) => {
  const { nombres, apellidos, id, correo, profesion } = req.body;

  // Validaciones
  if (!nameValidator(nombres)) {
    return res.status(400).json({ message: 'Nombres deben contener solo letras y tener un máximo de 50 caracteres.' });
  }

  if (!nameValidator(apellidos)) {
    return res.status(400).json({ message: 'Apellidos deben contener solo letras y tener un máximo de 50 caracteres.' });
  }

  if (!idValidator(id)) {
    return res.status(400).json({ message: 'ID debe contener solo números y tener un máximo de 11 caracteres.' });
  }

  if (!emailValidator(correo)) {
    return res.status(400).json({ message: 'Correo debe ser una dirección válida de @hotmail.com.' });
  }

  try {
    // Verificar si el ID ya existe
    const existingUserById = await User.findOne({ id });
    if (existingUserById) {
      return res.status(400).json({ message: 'ID ya existe.' });
    }

    // Verificar si el correo ya existe
    const existingUserByEmail = await User.findOne({ correo });
    if (existingUserByEmail) {
      return res.status(400).json({ message: 'Correo ya existe.' });
    }

    // Crear y guardar el nuevo usuario
    const newUser = new User({ nombres, apellidos, id, correo, profesion });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send({ message: 'Error al crear el usuario', error });
  }
};

module.exports = {
  createUser
};

/*
Métodos Nativos
L1: require - Importa módulos
L5: async - Define función asincrónica
L10: if - Condicional
L11: return - Finaliza y devuelve valor
L11: res.status - Establece el código de estado HTTP
L11: res.json - Envía una respuesta JSON
L15: if - Condicional
L16: return - Finaliza y devuelve valor
L16: res.status - Establece el código de estado HTTP
L16: res.json - Envía una respuesta JSON
L20: if - Condicional
L21: return - Finaliza y devuelve valor
L21: res.status - Establece el código de estado HTTP
L21: res.json - Envía una respuesta JSON
L25: if - Condicional
L26: return - Finaliza y devuelve valor
L26: res.status - Establece el código de estado HTTP
L26: res.json - Envía una respuesta JSON
L30: try - Inicia bloque de código para manejar errores
L33: await - Espera a que se resuelva la promesa
L34: if - Condicional
L35: return - Finaliza y devuelve valor
L35: res.status - Establece el código de estado HTTP
L35: res.json - Envía una respuesta JSON
L38: await - Espera a que se resuelva la promesa
L40: return - Finaliza y devuelve valor
L40: res.status - Establece el código de estado HTTP
L40: res.json - Envía una respuesta JSON
L44: await - Espera a que se resuelva la promesa
L45: res.status - Establece el código de estado HTTP
L45: res.send - Envía una respuesta
L47: catch - Captura errores
L48: res.status - Establece el código de estado HTTP
L48: res.send - Envía una respuesta
L50: module.exports - Exporta módulos
Métodos No Nativos
L1: User.findOne - Busca un documento en la base de datos
L2: emailValidator - Valida el formato del correo electrónico
L2: nameValidator - Valida el formato del nombre
L2: idValidator - Valida el formato del ID
L33: User.findOne - Busca un documento en la base de datos
L38: User.findOne - Busca un documento en la base de datos
L43: User - Constructor para crear un nuevo usuario
L44: newUser.save - Guarda el nuevo usuario en la base de datos
*/
