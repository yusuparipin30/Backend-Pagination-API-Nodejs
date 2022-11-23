//1
import express from "express";
//2.
import cors from "cors";
//6
import UserRoutes from "./routes/UserRoutes.js"; 
//3
const app = express();
//5
app.use(cors());
//format.json agar nanti data di terima dengan format json
app.use(express.json());
//7.
app.use(UserRoutes);
//4.
app.listen('5000', ()=> console.log('Server up and Runing...'));