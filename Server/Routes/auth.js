import express from "express";
const userRouter = express.Router();
import registerController from "../Controllers/userController.js";
userRouter.post("/register", registerController);

export default userRouter;
