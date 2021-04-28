let express = require("express");
let Usuario = require("../controllers/usuario");

let api = express.Router();

api.post("/registrarUsuarioP", Usuario.registrarUsuarioP);

api.post("/loginP", Usuario.loginP);

module.exports = api;
