let mongoose = require("mongoose");
// metodo que permite crear esquemas desde node/express
let Schema = mongoose.Schema;

// Se crea el esquema
let usuarioSchema = Schema({
  nombres: String,
  apellidos: String,
  edad: Number,
  rol: String,
  correo:String,
  pass: String,
  
});
// Se exporta el modulo
module.exports = mongoose.model("usuario", usuarioSchema);