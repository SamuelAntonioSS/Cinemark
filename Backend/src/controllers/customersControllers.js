
const customersController = {};
import customersModel from "../models/Customers.js"

// S E L E C T

customersController.getCustomers = async(req, res) =>{
    const customers = await customersModel.find()
    res.json(customers)
}

// I N S E R T 

customersController.insertCustomers = async (req, res) =>{
    const {nombre, correo, contrasenia, telefono, direccion, activo} = req.body;
    const newCustomers = new customersModel({nombre, correo, contrasenia, telefono, direccion, activo})
    await newCustomers.save()
    res.json({message: "customers saved"});
}

// D E L E T E

customersController.deleteCustomers = async (req, res) =>{
    await customersModel.findByIdAndDelete(req.params.id);
    res.json({message: "customers deleted"});
}

// U P D A T E 

customersController.updateCustomers = async (req, res) =>{
    const {nombre, correo, contrasenia, telefono, direccion, activo} = req.body;
    const updateCustomers = await customersModel.findByIdAndUpdate(req.params.id,
         
            {
                nombre,
                 correo,
                  contrasenia, 
                  telefono, 
                  direccion, 
                  activo
                },

         {new: true}
    )
    res.json({message: "customers update"});
};

export default customersController;