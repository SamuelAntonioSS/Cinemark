// Importo todo lo de la libreria express
import express from "express";
import EmployeesRoutes from "./src/models/Employees.js";
import customersRoutes from "./src/models/Customers.js";
import registerEmployeesRoutes from "./src/routes/registerEmployees.js"
import registerClientsRoutes from "./src/routes/registerClients.js";
import passwordRecoveryRoutes from "./src/routes/passwordRecovery.js";
import moviesRoutes from "./src/routes/movies.js";
import cookieParser from "cookie-parser";










/////////
const app = express();

// Uso middleware para que acepte datos Json
app.use(express.json());

//Que acepte cookies
app.use(cookieParser())


//Definir rutas 
app.use ("/api/employees", EmployeesRoutes);
app.use ("/api/customers", customersRoutes);
app.use("/api/registerEmployeess", registerEmployeesRoutes);
app.use("/api/registerClients",registerClientsRoutes );
app.use("/api/passwordRecovery", passwordRecoveryRoutes);
app.use("/api/movies", moviesRoutes)




//Exporto la constante para poder usar el express en otros lados
export default app;