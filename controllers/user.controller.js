import supabasefrom  from "../config/supabase";

export const registerUser=async(req,res)=>{
    try{
        const{name,email,password,role}=req.body;
        if(!name || !email || !password || !role){
            return res.status(400).json({message:"All feilds requires"});

        }
        const { data,error }=await supabase.from("users").insert([{name,email,password,role}]).select();
        if(error){
            returnres.status(400).jaon({ error : error.message });
        }
        res.status(201).json({ message :"User registered successfully",user:data[0]});

    }
    catch(err){
         res.status(500).json({error:err.message})
    }
}
export const loginUser=async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
             return res.status(400).json({message:"email and password missing "});
        }
        const {data,error}= await supabase.from("users").select("*").eq("email,email").single();
        if(error|| !data){
            return res.status(401).json({message:"Invalid credentials "})
        }
        if(data.password!== password){
            return res.status(401).json({message:"Invalid credentials "})
        }
        res.status(200).json({message:"Login successful",user:data});
    }
    catch (err){
res.status(500).json({error : err.message})
    }
}