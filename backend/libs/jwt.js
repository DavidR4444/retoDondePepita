// Variable donde importamos el jwt
let jwt = require("jwt-simple");
// Importamos libreria para fechas
let moment = require("moment");
// Clave secreta
let secret = "bit21store";

// Exportamos el token generado enviando los datos del usuario
exports.createToken =  (usuario) => {
  let payload = {
    _id: usuario._id,
    nombres: usuario.nombres,
    apellidos: usuario.apellidos,
    edad: usuario.edad,
    correo: usuario.correo,
    iat: moment().unix(),
   
  };
  
  return jwt.encode(payload, secret);
};