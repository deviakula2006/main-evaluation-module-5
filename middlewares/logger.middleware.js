import fs from "fs";
export const loggerMiddleware=(req,res,next)=>{
  const log = `Methos:${req.methos}| URL:${req.url} | Time: ${new Date().toISOString()}\n`;
  fs.appendFile("logs.txt",log,(err)=>{
    if(err){
        console.error("Error writing log")
    }
  })
  next();
}