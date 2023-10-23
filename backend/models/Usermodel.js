const mongoose = require("mongoose")
const bcript=require("bcrypt")
const jwt=require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
   password:
    {
        type: String,
        required: true
    },

    profilePicture: { type: String , default:"https://img.freepik.com/premium-vector/gray-avatar-icon-vector-illustration_276184-163.jpg"},
    description: {
        type: String,
        default:"New User at The Day Thought"

    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
 } ]

})





userSchema.methods.generateAuthToken = async function (){
    try{
        let token= jwt.sign({_id: this._id}, process.env.SECRET)
            this.tokens=this.tokens.concat({token:token})
            await this.save()
            console.log("Token was added")
            return token
       
    }catch(err){
        console.log(`Unable to generate token ${err}`)
    }
}

userSchema.pre('save', async function(next){
    console.log("Hashing the password");
    if(this.isModified('password')){
        this.password= await bcript.hash(this.password,12)
       
    }
    next()
})












const User=mongoose.model("Users",userSchema);

module.exports=User