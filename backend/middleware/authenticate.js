
const express = require("express")
const User = require("../models/UserModel")
const Jwt = require("jsonwebtoken")

const cookieParser = require("cookie-parser")

const dotenv=require("dotenv")
const router = express.Router()
router.use(cookieParser());
dotenv.config({path: "./.env"})
router.use('/uploads', express.static('uploads'));
const Authenticate = async (req, res, next) => {

    try {

        let token =await req.cookies.jwtoken
        if (!token) {
            console.log(`Token didnt came, ${token}`)
        }else{
            const verifyToken = Jwt.verify(token, process.env.SECRET);
        

            const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token })
            if (!rootUser) {
                throw new Error("User not found")
            } else {
                req.token = token;
                req.rootUser = rootUser;
                req.userID = rootUser._id;
                next()
            }
        }
       


    } catch (err) {

        console.log(err)
        res.status(401).json({ error: "User not Found " });

    }

}

module.exports = Authenticate