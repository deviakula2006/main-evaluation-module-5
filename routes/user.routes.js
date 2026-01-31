import express from "express";
import { registerUser, loginUser } from "../controllers/user.controller.js"
const router=express.Router();
router.post("/register",registerUser);
roueter.post("/login",loginUser);
export default router;
