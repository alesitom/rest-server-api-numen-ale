const { Schema, model } = require('mongoose')



const ProductoSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: 'true'
    },
    precio: {
        type: Number,
        default: 0
    },
    descripcion:{
        type: String
    }
})


module.exports = model('Producto', ProductoSchema)