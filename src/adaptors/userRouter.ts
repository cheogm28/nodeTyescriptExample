import express from "express";
import * as controller from "./controllers/userController";
const userRouter = express.Router();

userRouter.get("/",(req, res)=>{res.status(200).send(controller.getUsers())});
userRouter.post("/:id",(req, res)=>{res.status(200).json(controller.getUserById(Number(req.params.id)))});
export default userRouter;