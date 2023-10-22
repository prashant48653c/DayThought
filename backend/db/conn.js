const mongoose=require("mongoose")

const connectDB=async ()=>{
    mongoose.connect("mongodb+srv://prashant23423:prashant@cluster0.ds9urdj.mongodb.net/?retryWrites=true&w=majority", {
        useUnifiedTopology:true,
        useNewUrlParser:true
        }).then(()=>{
            console.log("Mongo is connected");
        }).catch((err)=>{
            console.log("MOngo problem" ,err);
        })
}
module.exports=connectDB
