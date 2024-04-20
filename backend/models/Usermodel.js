const mongoose = require("mongoose")
const bcrypt=require("bcrypt")
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

    profilePicture: { type: String , default:"https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"},
    description: {
        type: String,
        default:"New User at Day Thought"

    },
    blogs:[{
        heading:{
            type:String,
            required:true,
        },
        blog:{
            type:String,
            required:true
        },
        uploadDate:{
            type:String,
            
        },
        blogImg:{
            type:String,
            default:"https://fusiondream.com/wp-content/themes/ryse/assets/images/no-image/No-Image-Found-400x264.png"
        }
    }],
    tokens:[{
        token:{
            type:String,
            required:true
        }
 } ]

},
{
timestamps:true
})





userSchema.methods.generateAuthToken = async function (){
    try{
        console.log("Trying to login")
        let token= jwt.sign({_id: this._id}, process.env.SECRET)
            this.tokens=this.tokens.concat({token:token})
            await this.save()
            console.log("Token was added")
            return token
       
    }catch(err){
        console.log(`Unable to generate token ${err}`)
    }
}



userSchema.methods.uploadBlog = async function (heading,blog,uploadDate){
    try{
        console.log("Trying to post blog")

            this.blogs=this.blogs.concat({heading,blog,uploadDate})
            await this.save()
            console.log("Blog was added")
            return this.blogs
       
    }catch(err){
        console.log(`Unable to generate token ${err}`)
    }
}




userSchema.pre('save', async function (next) {
    console.log("Hashing the password");
    if (this.isModified('password')) {
      try {
        this.password = await bcrypt.hash(this.password, 12);
      } catch (error) {
        return next(error);
      }
    }
    next();
  });
  













const User=mongoose.model("Users",userSchema);

module.exports=User