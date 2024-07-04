
/*La función authenticateToken toma req (solicitud), res (respuesta) y next (siguiente función de 
middleware) como palametros.
Intenta obtener el token de autorizacion de los encabezados aut o x-auth-token de la solicitud: */

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['aut'] || req.headers['x-auth-token'];
   
/*Si no se encuentra un token en los encabezados la funcipn responde con un estado 401 No autorizado 
y un mensaje de error: */  
    if (!authHeader) {
      return res.status(401).json({ message: 'Acceso denegado. No se proporciona ninguna ficha.' });
    }
  

/*Si el encabezado de autorización comienza con la palabra "Bearer ", el middleware extrae el token 
eliminando "Bearer " del comienzo. si no usa el valor completo del encabezado */    
    const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7, authHeader.length) : authHeader;
   
//El token extraído se compara con el token de acceso almacenado en las variables de entorno  
    if (token !== process.env.ACCESS_TOKEN) {
      return res.status(403).json({ message: 'Invalid token.' });
    }
  
    next();
  };
  
  module.exports = authenticateToken;
  