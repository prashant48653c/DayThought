const mongoose=require("mongoose")

const connectDB=async ()=>{
    mongoose.connect(process.env.DATABASE, {
        useUnifiedTopology:true,
        useNewUrlParser:true
        }).then(()=>{
            console.log("Mongo is connected");
        }).catch((err)=>{
            console.log("MOngo problem" ,err);
        })
}
module.exports=connectDB
