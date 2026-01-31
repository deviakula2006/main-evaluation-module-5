export const notFoundMiddleware=(req,res)=>{
    res.status(404).send("This request is not valid");
}