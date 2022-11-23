//1. 
import express from "express";
//4.import function dr controller
import { getUsers } from "../controllers/UserController.js";

//2.
const router =express.Router();

//3. membuat sebuah router menggunakan method get
router.get('/users',getUsers);
//5
export default router;