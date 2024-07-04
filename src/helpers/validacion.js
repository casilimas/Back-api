const emailValidator = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  
  const nameValidator = (name) => {
    const regex = /^[a-zA-Z\s]{1,50}$/; // Solo letras y espacios, máximo 50 caracteres
    return regex.test(name);
  };
  
  const surnameValidator = (surname) => {
    const regex = /^[a-zA-Z\s]{1,50}$/; // Solo letras y espacios, máximo 50 caracteres
    return regex.test(surname);
  };
  
  const idValidator = (id) => {
    const regex = /^[0-9]{1,11}$/;
    return regex.test(id);
  };
  
  module.exports = {
    emailValidator,
    nameValidator,
    surnameValidator,
    idValidator
  };
  

  /*
  EXPRECIONES REGULARES
L3: return - Finaliza y devuelve valor
L4: regex.test - Valida el formato del correo electrónico usando RegExp
L7: return - Finaliza y devuelve valor
L8: regex.test - Valida el formato del nombre usando RegExp
L11: return - Finaliza y devuelve valor
L12: regex.test - Valida el formato del apellido usando RegExp
L15: return - Finaliza y devuelve valor
L16: regex.test - Valida el formato del ID usando RegExp
L17: module.exports - Exporta módulos
  */