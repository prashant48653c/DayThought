const express=require("express")

const app=express()
const PORT=4000;

app.get("/",(req,res)=>{
    res.send(":Home page")
})

app.listen(PORT,()=>{
console.log(`server listend at ${PORT}`)
})