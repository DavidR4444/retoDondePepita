

let Producto = require("../modelo/producto");



const registarProducto = (req, res) => {

  let params = req.body;
  
  let producto = new Producto();


  producto.nombre = params.nombre;
  producto.descripcion = params.descripcion;
  producto.precio = params.precio;
  producto.save((err, saveProducto) => {
    

    if (err) {
      res.status(500).send({ mensaje: "error al conectar al servisor" });
    } else {
      if (saveProducto) {
        res.status(200).send({ producto: saveProducto });
      } else {
        res.status(401).send({ mensaje: "no se pudo regitrar el producto" });
      }
    }
  });
};



const buscarProducto = (req, res) => {

  let id = req.params["id"];
  
  Producto.findById({ _id: id }, (err, datosProducto) => {
    
    if (err) {
      res.status(200).send({ producto: datosProducto });
    } else {
      if (datosProducto) {
        res.status(200).send({ producto: datosProducto });
      } else {
        res.status(401).send({ mensaje: "no existe el producto" });
      }
    }
  });
};



const listaProducto = (req, res) => {
  
 
  let nombre = req.params["nombre"];


  Producto.find({ nombre: new RegExp(nombre, "i") }, (err, datosProducto) => {
    
 
    if (err) {
     
      res.status(500).send({ mensaje: "Error al conectar al servidor" });
    } else {
      if (datosProducto) {
        res.status(200).send({ producto: datosProducto });
      } else {
        res.status(401).send({ mensaje: "No hay producto" });
      }
    }
  });
};

const editarProducto = (req, res) => {
 
  let id = req.params["id"];
 
  let params = req.body;

  

  Producto.findByIdAndUpdate({_id:id},{nombre:params.nombre, descripcion:params.descripcion,precio:params.precio},(err,datosProducto)=>{
   
    if (err) {
      res.status(500).send({ mensaje: "Error al conectar al servidor" });
    } else {
      if (datosProducto) {
        res.status(200).send({ producto: datosProducto });
      } else {
        res.status(401).send({ mensaje: "el producto no se pudo editar" });
      }
    }

  });
};


const eliminarProducto = (req, res) => {
 
  let id = req.params["id"];
  
  Producto.findByIdAndDelete({ _id: id }, (err, datosProducto) => {
    if (err) {
      res.status(500).send({ mensaje: "Error al conectar al servidor" });
    } else {
      if (datosProducto) {
        res.status(200).send({ producto: datosProducto });
      } else {
        res.status(401).send({ mensaje: "el producto no se pudo eliminar" });
      }
    }
  });
};


//exportar
module.exports = {
  registarProducto,
  buscarProducto,
  listaProducto,
  editarProducto,
  eliminarProducto,
};