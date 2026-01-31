import express from "express";
import {
  createTrip,
  endTrip,
  getTrips
} from "../controllers/trip.controller.js";

const router = express.Router();
router.post("/create", createTrip);
router.patch("/end/:id", endTrip);
router.get("/", getTrips);

export default router;
