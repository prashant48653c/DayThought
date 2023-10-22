const express=require("express")
const mongoose=require("mongoose")
const User=require("../models/UserModel.js")

const router=express.Router();






// /userdata is the route where the information about user and the blog will be sent. this endpoint is responsible when user view other user's profile and when view it's own profile and tries to login 

router.get("/userdata",(req,res)=>{
    res.send("This is login page");
})






// /login for posting user credential to the server
router.post("/login",(req,res)=>{
   
    const {  password, email , profilePicture , description } =req.body;
    if(  !password || !email ){
        res.status(400).json({messege: "Fill the credential properly"});
    }
    




})

//  /signup endpoint to register a user

router.post("/signup", async (req,res)=>{
    try{
        const {name, password, email , profilePicture, description}=req.body;
        if( !name || !password || !email ){
            res.status(400).json({messege: "Fill the credential properly"});
        }
        const existedUser= await User.findOne({email:email});
        if(existedUser){
            res.status(409).json({messege:"Email already registered"})
        }
        const newUser=  new User({ name , password , email , profilePicture , description })
        await newUser.save()
        res.status(201).json({messege:"Succesfully registered!"})
        
        
    }catch(err){
res.status(401).json({messege: "Unable to register"});
    }



})















module.exports=router