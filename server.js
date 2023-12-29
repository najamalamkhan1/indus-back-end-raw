const express = require("express")

const app = express()
const mongoose = require('mongoose');
app.use(express.json())
const User = require("./UserModel")
async function connectDb() {
    try {
        await mongoose.connect("mongodb+srv://sherazzafar148:sam36520@cluster0.1yekrwb.mongodb.net/", {
            useNewUrlParser: true
        });
        console.log("Database connected successfully!")
    } catch (error) {
        console.log(error);
        process.exit();
    }
}

connectDb()
app.get("/", (req, res) => {
    res.send("hello this is my first server")
})

app.post("/createUser", (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({
            name, email, password
        })
        newUser.save()
        res.status(200).json("user created")
    } catch (e) { console.log(e) }
})




app.listen(5000, () => { console.log("server is runing port 5000") })

