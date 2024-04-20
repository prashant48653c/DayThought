const express=require("express")
const connectDB=require("./db/conn")
const router=require("./routers/userRoute")
const dotenv=require("dotenv")
const cors=require("cors")
const cookieParser=require("cookie-parser")

 
//-----------------------------------
dotenv.config({path: "./.env"})
const app=express()
app.use(cookieParser(process.env.COOKIE_SECRET, {
    secure: true, // Set the Secure attribute
    sameSite: 'none', // Set the SameSite attribute if necessary
  }));

const PORT= process.env.PORT || 4000;
app.use(router)
app.use(express.json())
// ----------------------------------
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173",
    methods:"GET,PUT,POST,PATCH,DELETE"
}))
// ----------------------------------
connectDB()

//------------------------------------
app.get("/",(req,res)=>{
    res.send("Home page")
    
})



//------------------------------------

app.listen(PORT,()=>{
console.log(`server listend at ${PORT}`)
})