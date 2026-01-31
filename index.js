import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js"
import vehicleRoutes from "./routes/vechile.routes.js"
import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import { notFoundMiddleware } from "./middlewares/notFound.middleware.js";
import (loggerMiddleware)
dotenv.config();
const app=express();
app.use(express.json());
const PORT= process.env.PORT||1574;
app.use("/users",userRoutes);
app.use("/vehicles",vehicleRoutes);
app.use(loggerMiddleware)
app.use(notFoundMiddleware)
app.get("/",(req,res)=>{
    res.send("Fleet management API running");
});
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})