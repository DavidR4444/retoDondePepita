

let Stock = require("../modelo/stock");

const registrarStock = (req, res) => {

  let params = req.body;
 
  let stock = new Stock();
  if (
    
    params.idProducto &&
    params.cantidad
  ) {
    
    stock.idProducto = params.idProducto;
    stock.cantidad = params.cantidad;
    //registar
    stock.save((err,datosStock)=>{

        if (err) {
            res.status(500).send({ mensaje: "Error al conectar al servidor" });
          } else {
            if (datosStock) {
              res.status(200).send({ stock: datosStock });
            } else {
              res.status(401).send({ mensaje: "no se pudo registrar el stock" });
            }
          }

    });
  } else {

    res.status(401).send({ mensaje: "falto alguno de los campos" });
  }
};


module.exports = {
    registrarStock,
};
