const express=require("express")
const router=require("../routers/userRoute")
const User=require("../models/UserModel")
const cookieParser=require("cookie-parser")
const jwt = require("jsonwebtoken")


 
 


// checking whether there is a user with the jwt token getting matched or not
const Authenticate=async(req,res,next)=>{
    try{
        let token=await req.cookies.jwtoken;
        if(!token){
        console.log("Token not available")
            
        }

        const verifyToken= jwt.verify(token, process.env.SECRET)
        const rootUser=await User.findOne({_id:verifyToken._id, "tokens.token":token})
        if(rootUser){
            req.token=  token;
            req.rootUser= rootUser;
            req.userID=rootUser._id;
        }else{
            throw new Error("User not found")
        }
        next()
    }catch(err){
        console.log(err)
        res.status(401).json({ error: "User not Found " });
    }
}

exports.module= Authenticate