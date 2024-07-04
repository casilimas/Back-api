const mongoose = require('mongoose');
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const mongoUri = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    console.log('Intentando conectar a la base de datos...');
    await mongoose.connect(mongoUri);
    console.log('Conexión a la base de datos exitosamente');

    // Consulta simple para verificar la conexión
    const admin = new mongoose.mongo.Admin(mongoose.connection.db);
    admin.listDatabases((err, result) => {
      if (err) {
        console.error('Error al listar las bases de datos:', err);
      } else {
        console.log('Bases de datos en MongoDB Atlas:', result.databases);
      }
    });
  } catch (error) {
    console.error('Error conectando a la base de datos:', error);
    process.exit(1); // Detiene la aplicación si no puede conectar a la base de datos
  }
};

module.exports = connectDB;

/*
Métodos Nativos
L1: require - Importa módulos
L2: require - Importa módulos
L13: async - Define función asincrónica
L14: try - Inicia bloque de código para manejar errores
L15: console.log - Imprime mensaje en la consola
L16: await - Espera a que se resuelva la promesa
L17: console.log - Imprime mensaje en la consola
L20: new - Crea una nueva instancia de un objeto
L21: admin.listDatabases - Lista las bases de datos
L23: console.error - Imprime mensaje de error en la consola
L25: console.log - Imprime mensaje en la consola
L28: catch - Captura errores
L29: console.error - Imprime mensaje de error en la consola
L30: process.exit - Detiene la aplicación
L33: module.exports - Exporta módulos
Métodos No Nativos
L1: mongoose.connect - Conecta a la base de datos
L20: mongoose.mongo.Admin - Crea una instancia de administrador de MongoDB
*/