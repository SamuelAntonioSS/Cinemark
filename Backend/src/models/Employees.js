
import { Schema, model } from "mongoose";

const employeesSchema = new Schema({
    nombre:{
        type: String,
        require: true,
        maxLength: 100
    },
    correo : {
        type: String,
        require: true,
        maxLength: 100
    },
    contrasenia: {
        type: String,
        require: true,
        maxLength: 100
    },
    telefono: {
        type: String,
        require: true,
        maxLength: 100
    },
    direccion: {
        type: String,
    },
    puesto: {
        type: String ,
    },
    fecha_contratacion: {
        type: Date,
    },
    salario : {
        type: Number
    },
    activo :{
        type: Boolean
    },
},{
    timestamps: true,
    strict: false
})

export default model("employeesModel", employeesSchema);