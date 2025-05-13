// Importo todo lo de la libreria express
import express from "express";
import EmployeesRoutes from "./src/models/Employees";
import customersRoutes from "./src/models/Customers";








/////////
const app = express();

// Uso middleware para que acepte datos Json
app.use(express.json());

//Que acepte cookies
app.use(cookieParser())


//Definir rutas 
app.use ("/api/employees", EmployeesRoutes);
app.use ("/api/customers", customersRoutes);



//Exporto la constante para poder usar el express en otros lados
export default app;