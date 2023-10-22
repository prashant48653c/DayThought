const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    "id": 1,
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

    profilePicture: { type: String },
    description: {
        type: String,

    }

})

const User=mongoose.model("Users",userSchema);

module.exports=User