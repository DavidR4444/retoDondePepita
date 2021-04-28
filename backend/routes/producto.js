//importar express

let express=require("express");
//importar controlador
let Producto=require("../controllers/producto");

//creamos la api
let api=express.Router();
//rutas de la api

api.post("/producto/registrarProducto", Producto.registarProducto);
api.get("/producto/:id",Producto.buscarProducto);
api.get("/producto/:nombre?",Producto.listaProducto);
api.post("/producto/:nombre?",Producto.listaProducto);
api.put("/producto/editarProducto/:id",Producto.editarProducto);
api.delete("/producto/eliminarProducto/:id",Producto.eliminarProducto);
//exportamos el modulo
module.exports=api;