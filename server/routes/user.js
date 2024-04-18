import express  from "express";
import userController from "../controllers/user.js";

const route = express.Router();
route.get("/users",userController.getAllUsers)
route.post("/users",userController.createUser)
route.get("/users/single/:id",userController.singleUser)
route.put("/users/:id",userController.updateUser)
route.delete("/users/:id",userController.deleteUser)




export default route
