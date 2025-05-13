

const employeesController = {};
import employeesModel from "../models/Employees.js";

// S E L E C T 

employeesController.getEmployees = async(req, res) =>{
    const employees = await employeesModel.find()
    res.json(employees)
}

// I N S E R T 

employeesController.insertEmployees = async(req, res) =>{
    const {nombre, correo, contrasenia, telefono, direccion, puesto, fecha_contratacion, salario, activo} = req.body;
    const newEmployees = new employeesModel({nombre, correo, contrasenia, telefono, direccion, puesto, fecha_contratacion, salario, activo})
    await newEmployees.save()
    res.json({message: "employees saved felicidades"});
}

// D E L E T E 

employeesController.deleteEmployees = async (req, res) =>{
    await employeesModel.findByIdAndDelete(req.params.id);
    res.json({message: "employees deleted"});
}

// U P D A T E 

employeesController.updateEmployees = async (req, res) =>{
    const {nombre, correo, contrasenia, telefono, direccion, puesto, fecha_contratacion, salario, activo} = req.body;
    const updateEmployees = await employeesModel.findByIdAndUpdate(req.params.id, {nombre, correo, contrasenia, telefono, direccion, puesto, fecha_contratacion, salario, activo},{new: true}
    )
    res.json({message: "employees update"});
};

export default employeesController;

