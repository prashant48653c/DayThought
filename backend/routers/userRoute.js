const express = require("express")
const mongoose = require("mongoose")
const User = require("../models/UserModel.js")
const bcript = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const Authenticate = require("../middleware/authenticate.js")
const multer = require("multer")
const dotenv = require("dotenv")
const path = require("path")
const bodyParser = require("body-parser")
//---------------------------------------
const router = express.Router();
router.use(cookieParser())
dotenv.config({ path: "./.env" })

router.use(express.json())

// Increase the request size limit to 20MB

router.use(cors({
    credentials: true,
    origin: "https://thedaythought.vercel.app",
    methods: "GET,PUT,POST,PATCH,DELETE"
}))

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
router.use('/', express.static('uploads'))



//provide all the data of the database

// upload middlware for imgage 
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads");
        },
        filename: function (req, file, cb) {
            // You can modify the filename as needed; for example, using the user's ID and a timestamp
            cb(null, `profile-${req.userID}-${Date.now()}.jpg`);
        }
    }),
    limits: { fileSize: 10 * 1024 * 1024 } // 10 megabytes
}).single("profilePicture");

///////////////////////////////////////////////

router.get('/alldata', async (req, res) => {
    try {
        const data = await User.find({});

        if (!data) {
            return res.status(404).json({ message: 'No data found' });
        }

        res.status(200).json({ data });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// /userdata is the route where the information about user and the blog will be sent. this endpoint is responsible when user view other user's profile and when view it's own profile and tries to login 

router.get("/getdata", Authenticate, async (req, res) => {
    let token = await req.cookies.jwtoken

    const data = await req.rootUser

    if (!data) {
        res.status(400).json({ error: "New user" })
    } else {
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

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true,
                credentials: "include",
                secure: true
            })

            res.status(200).json({ messege: "Succesfull login" })
        }
    } catch (err) {
        console.log(err)
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
    try {
        res.clearCookie('jwtoken', { path: '/' });
        console.log("cookie was cleared")
        res.status(200).json({ messege: "User has been logged out" })
    } catch (err) {
        console.log(err)
    }


})



router.post("/postBlog", Authenticate, upload, async (req, res) => {


    try {
        const { heading, blog, blogImg } = await req.body;
        console.log(blogImg)

        if (!heading || !blog) {
            res.status(400).json({ messege: "Missing heading or blog" });
        }
        const userId = await req.userID

        const oldUser = await User.findOne({ _id: userId })

        if (!oldUser) {
            res.status(404).json({ messege: "User not found" })
        } else {

            if (req.file) {
                console.log(req.file, "file ")

                const timestamp = Date.now();
                const date = new Date(timestamp);

                const monthNames = [
                    'January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December'
                ];

                const monthName = monthNames[date.getMonth()];
                const day = date.getDate();

                const uploadDate = `${monthName} ${day}`
                console.log(uploadDate)
                const blogImg = `http://daythought.vercel.app/${req.file.filename}`


                //////////////////////////////////


                const blogs = await oldUser.takeBlog(heading, blog, uploadDate, blogImg)
                await oldUser.save()
                res.status(200).json({ messege: "Succesfully posted the blog" })
            }
        }

    } catch (err) {
        console.log(err)
        res.status(404).json({ messege: "Cannot post the blog" })
    }







})



router.patch("/updateProfile", Authenticate, async (req, res) => {

    try {
        const { name, description } = await req.body;


        const userId = await req.userID

        const oldUser = await User.findOne({ _id: userId })

        if (!oldUser) {
            res.status(404).json({ messege: "User not found" })
        } else {
            const result = await User.findOneAndUpdate({ _id: userId }, {
                $set: {
                    name: name,
                    description: description
                }
            });
            await oldUser.save()

            res.status(200).json({ message: "Profile updated successfully" });

        }

    } catch (err) {
        console.log(err)
        res.status(404).json({ messege: "Cannot update profile" })
    }

})






router.patch("/profile", Authenticate, upload, async (req, res) => {

    if (req.file) {
        const userId = await req.userID;



        try {

            const result = await User.findOneAndUpdate({ _id: userId }, {
                $set: {
                    profilePicture: `https://daythought.vercel.app/${req.file.filename}`
                }
            });

            if (result) {
                res.status(200).json({ message: "Profile updated successfully" });
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "An error occurred while updating the profile" });
        }
    } else {
        res.status(400).json({ message: "Please upload a valid profile picture" });
    }
});

module.exports = router;
