import supabase from "../config/supabase"
export const addVehicle=async(req,res)=>{
    try{
        const {
            name,
            registration_number,
            allowed_passengers,
            rate_per_km,
            owner_id
        }=req.body;
        if(!name || ! registration_number || ! allowed_passengers || ! rate_per_km ||  owner_id){
            return res.status(400).json({message:"All feilds requires"});
        }
        const{data:owner,error}=await supabase.from("users").select("role").eq("id",owner_id).single();
        if(error || !owner){
            return res.status(404).json({message:"owner not found"});
        }
        if(owner.role!== "owner"){
            return res.status(400).json({message:"owner can add one vechile "});
        }
        const { data,error : insertError}= await supabase.from("vechiles").insert([{name, registration_number,
            allowed_passengers,
            rate_per_km,
            owner_id}]).select();
            if(insertError){
                return res.status(400).json({ error : insertError.message})

            }
            res.status(201).json({message: "vechile added successfully",vechile:data[0]})
    }
catch(err){
    res.status(500).json({ error : err.message})
}
}
export const getvehicle=async(req,res)=>{
    try{
        const{data , errorr}=await supabase.from("vechiles").select("*");
        if(error){
            return res.status(400).json({ error : error.message})

        }
        res.status(200).json(data);
    }
    catch(err){
           res.status(500).json({ error : err.message})
    }
}