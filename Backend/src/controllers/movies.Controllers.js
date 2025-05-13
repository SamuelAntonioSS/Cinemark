import blogModel from "../models/Movies.js";
import {v2 as cloudinary} from "cloudinary";

import { config } from "../config.js";

//1- Configurar Cloudinary
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret,
});

//2- Array de funcion vacio
const moviesController = {}

moviesController.getAllPosts = async (req, res)=>{

    const posts = await moviesModel.find()
    res.json(posts)

}

// Subir u post al blog
moviesController.createPost = async (req,res)=>{
    try {
        
        const {titulo, descripcion} = req.body;
        let imageUrl = ""

        if(req.file){
            const result = await cloudinary.uploader.upload(
                req.file.path,
                {
                    folder: "public",
                    allowed_formats: ["jpg", "png", "jpeg"]
                }
            );
            imageUrl = result.secure_url;
        }

        const newPost = new blogModel({titulo, descripcion, director, genero, anio, duracion, image: imageUrl})
        newPost.save()

        res.json({message: "post saved mi rey"})

    } catch (error) {
        console.log("error"+error)
    }
}
export default moviesController;