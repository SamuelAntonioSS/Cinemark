import express from "express";
import multer from "multer";
import moviesController from "../controllers/movies.Controllers.js";

const router = express.Router();

//Confiurara una carpeta en local para que guarde las imagenes
const upload = multer({dest: "public/"})

router.route("/")
.get(moviesController.getAllPosts)
.post(upload.single("image"),moviesController.createPost)

export default router;