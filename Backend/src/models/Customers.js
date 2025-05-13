
import { Schema, model } from "mongoose";

const customersSchema = new Schema({
    nombre :{
        type: String,
        require: true,
        maxLength: 100
    },
    correo: {
        type: String,
        require: true,
        maxLength: 100
    },
    Contrasenia : {
        type: String,
        require: true,
        maxLength: 100
    },
    telefono : {
        type: String,
        require: true,
        maxLength: 100
    },
    direccion : {
        type: String,
        require: true,
        maxLength: 100
    },
    activo: {
        type: Boolean,
    },
    
},{
    timestamps: true,
    strict: false
})

export default model("customersModel", customersSchema);