const Producto = require("../models/producto.js");


const productosGet = (req, res) => {

    const { limite } = req.query;

    res.status(200).json({

        msg: 'GET PRODUCTOS',
        limite
    })

}

const productosPost = async (req, res) => {

    const body = req.body

    const producto = new Producto(body)

    await producto.save()

    res.status(200).json({

        msg: 'POST PRODUCTOS',
        producto
      
    })

}


const productosPut = (req, res) => {

    const { id } = req.params

    res.status(200).json({

        msg: 'PUT PRODUCTO',
        id
        
    })

}


const productosDelete = (req, res) => {

    const { id } = req.params

    res.status(200).json({

        msg: 'DELETE PRODUCTOS',
        id
        
    })

}


module.exports = {
    productosGet,
    productosPost,
    productosPut,
    productosDelete
}


