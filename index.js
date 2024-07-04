const express = require('express');
const cors = require('cors');
const connectDB = require('./src/DB/connection');
require('dotenv').config();

const rutas = require('./src/routes/rutas');
const app = express();

// Configurar CORS para permitir solicitudes desde la IP específica
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Aut'],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

connectDB();

app.use(express.json());
app.use('/aplicacion', rutas);

const PORT = process.env.PORT || 3000;

// Escuchar en todas las interfaces (0.0.0.0)
app.listen(PORT, '0.0.0.0', () => console.log(`Servidor corriendo en el puerto ${PORT}`));
