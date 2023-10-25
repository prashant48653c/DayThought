const express = require("express")
const mongoose = require("mongoose")
const User = require("../models/UserModel.js")
const bcript = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const Authenticate = require("../middleware/authenticate.js")

//---------------------------------------
const router = express.Router();
router.use(cookieParser())

router.use(express.json())

router.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: "GET,PUT,POST,PATCH,DELETE"
}))



// /userdata is the route where the information about user and the blog will be sent. this endpoint is responsible when user view other user's profile and when view it's own profile and tries to login 

router.get("/getdata" , async (req, res) => {
    const data =  req.rootUser
    if (!data) {
        res.status(400).json({ error: "New user" })
    }else{
        res.status(200).send(data)

    }
})






// /login for posting user credential to the server
router.post("/login", async (req, res) => {

    try {
        const { password, email } = req.body;
        if (!password || !email) {
            res.status(400).json({ messege: "Fill the credential properly" });
        }
        const oldUser = await User.findOne({ email: email })
        const matched = await bcript.compare(password, oldUser.password)
        if (!oldUser) {
            res.status(404).json({ messege: "User not found" })
        }
        if (matched) {
            const token = await oldUser.generateAuthToken()
            console.log(token)
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true,
                credentials: "include",
                secure:true
            })

            res.status(200).json({ messege: "Succesfull login" })
        }
    } catch (err) {
        res.status(404).json({ messege: "Cannot Login" })
    }







})

//  /signup endpoint to register a user

router.post("/signup", async (req, res) => {
    try {
        const { name, password, email, profilePicture, description } = req.body;
        if (!name || !password || !email) {
            res.status(400).json({ messege: "Fill the credential properly" });
        }
        const existedUser = await User.findOne({ email: email });
        if (existedUser) {
            res.status(409).json({ messege: "Email already registered" })
        }
        const newUser = new User({ name, password, email, profilePicture, description })
        await newUser.save()
        res.status(201).json({ messege: "Succesfully registered!" })


    } catch (err) {
        console.log(err)
        res.status(401).json({ messege: "Unable to register" });
    }



})


router.get("/logout", async (req, res) => {
    try{
        res.clearCookie('jwtoken', { path: '/'});
        console.log("cookie was cleared")
        res.status(200).json({ messege: "User has been logged out" })
    }catch(err){
console.log(err)
    }


})












module.exports = router