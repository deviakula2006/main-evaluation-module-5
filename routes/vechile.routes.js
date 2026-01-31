import express from "express";
import { addVehicle , getvehicle} from "../controllers/vechile.controller"
const router =express.Router();
router.post("/add",addVehicle);
router.get("/",getvehicle);
export default router;
