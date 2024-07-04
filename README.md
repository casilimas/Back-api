Node.js CRUD con Autenticación JWT
Esta aplicación Node.js con Express implementa un sistema CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar usuarios. Además, incluye autenticación y autorización utilizando JSON Web Tokens (JWT).
Funcionalidades
Crear Usuario: Permite registrar nuevos usuarios en la base de datos, con validaciones para asegurar la integridad de los datos ingresados.
Listar Usuarios: Proporciona una lista de todos los usuarios registrados en la base de datos.
Actualizar Usuario: Permite modificar la información de usuarios existentes, incluyendo validaciones para los datos actualizados.
Eliminar Usuario: Permite eliminar usuarios de la base de datos.
Iniciar Sesión: Autentica a los usuarios mediante correo electrónico y contraseña, generando un token JWT para acceso seguro a las rutas protegidas.
Tecnologías Utilizadas
Node.js: Entorno de ejecución para JavaScript en el servidor.
Express: Framework para aplicaciones web Node.js.
Mongoose: Biblioteca de modelado de datos para MongoDB y Node.js.
JWT (JSON Web Tokens): Sistema de autenticación basado en tokens.
bcryptjs: Biblioteca para el hashing de contraseñas.
dotenv: Carga variables de entorno desde un archivo .env.
Seguridad
Validaciones: Validación de entradas de usuario para nombres, apellidos, ID y correo electrónico.
Autenticación JWT: Generación de tokens JWT para proteger rutas y asegurar que solo usuarios autenticados puedan acceder a ciertas funcionalidades.
Uso
Registro: Los usuarios pueden registrarse proporcionando su nombre, apellido, ID, correo electrónico, profesión y contraseña.
Acceso a Rutas Protegidas: Las operaciones CRUD requieren un token JWT válido para ser ejecutadas.
