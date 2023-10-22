const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    
    "name": {
        type: String
    },
    "email": {
        type: String,
        required: true
    },
    "password":
    {
        type: String,
        required: true
    },

    profilePicture: { type: String , default:"https://img.freepik.com/premium-vector/gray-avatar-icon-vector-illustration_276184-163.jpg"},
    description: {
        type: String,
        default:"New User at The Day Thought"

    }

})

const User=mongoose.model("Users",userSchema);

module.exports=User