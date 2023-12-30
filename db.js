const mongoose = require("mongoose")
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


module.exports=connectDb