const express=require("express")
const connectDB=require("./db/conn")
const router=require("./routers/userRoute")
const app=express()
const PORT=4000;
app.use(router)
connectDB()
app.get("/",(req,res)=>{
    res.send(":Home page")
})

app.listen(PORT,()=>{
console.log(`server listend at ${PORT}`)
})