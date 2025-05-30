//Importamos el modelo de la base de datos
import Employees from "../models/Employees.js";
import brcryptjs from "bcryptjs"; //Lib para encriptar
import jsonwebtoken from "jsonwebtoken"; //Lib. para generar el token
import {config} from "../config.js";

// creamos un array de funciones

const registerEmployeessController = {};

registerEmployeessController.register = async (req, res) => {
    // pedimos todos los datos
    const{nombre, correo, contrasenia, telefono, direccion, puesto, fecha_contratacion, salario, activo} = req.body;

    try{
        // Verifica,os si l empleado ya existe
        const existEmployee = await Employees.findOne({correo});
        if(existEmployee){
            return res.json({message: "Employee already exists"});
        }

        // Hashear o encriptar la contraseña
        const contraseniadHash = await brcryptjs.hash(contrasenia, 15);

        // Guardamos el empleado en la base de datos
        const newEmployee = new Employees({
            nombre, correo, contrasenia, telefono, direccion, puesto, fecha_contratacion, salario, activo});

             await newEmployee.save();

             // Generar el token que valide que ya estoy registrado y puedo acceder a todas las paginas
             jsonwebtoken.sign(

                // 1- que voy a guardar
                {id: newEmployee._id},

                // 2- Clave secreta
                config.JWT.secret,

                // 3- Cuando expira

                {expiresIn: config.JWT.expiresIn},
                // 4- Funcion flecha 

                (error, token) => {
                    if(error) console.log(error);
                    res.cookie("authToken", token);
                    res.json({message: "Empleado registrado"});
                }
                );
                
            

    }
    catch(error){
        console.log(error);
        res.json({ message: "Error al registrar al empleado"});
    }
};

export default registerEmployeessController;