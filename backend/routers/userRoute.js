const express=require("express")
const mongoose=require("mongoose")

const router=express.Router();

router.get("/login",(req,res)=>{
    res.send("This is login page");
})




module.exports=router