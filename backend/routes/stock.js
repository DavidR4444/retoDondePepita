//importar express

let express = require("express");
//importar controlador
let Stock =require("../controllers/stock");
//generar api

let api = express.Router();
//generamos la rutas de la api
api.post("/stock/registrarStock", Stock.registrarStock);

//exportamos la api
module.exports = api;