import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes"
dotenv.config();
const app=express();
app.use(express.json());
const PORT= process.env.PORT||1574;
app.get("/",(req,res)=>{
    res.send("Fleet management API running");
});
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})