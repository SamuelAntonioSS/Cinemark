
import { Schema, model } from "mongoose";

const moviesSchema = new Schema({
    titulo :{
        type: String,
        require: true,
        maxLength: 100
    },
    descripcion  : {
        type: String,
        require: true,
        maxLength: 100
    },
    director: {
        type: String,
        require: true,
        maxLength: 100
    },
    genero: {
        type: String,
        require: true,
        maxLength: 100
    },
    anio: {
        type: number,
    },
    duracion : {
        type: number ,
    },
    imagen: {
        type: String
    },
   
},{
    timestamps: true,
    strict: false
})

export default model("movies", moviesSchema);