const {Schema, model}= require("mongoose")

const productoSchema=new Schema({
    nombre:{
        type: String,
        required: true
    },
    stock:{
        type: String
    },
    precio:{
        type: String,
        required: true
    },
    descripcion:{
        type: String
    }
})
const productoC= model("Productos",productoSchema);
module.exports=productoC;