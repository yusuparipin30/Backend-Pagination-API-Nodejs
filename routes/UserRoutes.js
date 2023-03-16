//1. 
import express from "express";
//4.import function dr controller
import { getUsers,
         createUser,
         getUserById,
         updateUser,
         deleteUser } from "../controllers/UserController.js";

//2.
const router =express.Router();

//3. membuat sebuah router menggunakan method get
router.get('/users',getUsers);
router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

//5
export default router;