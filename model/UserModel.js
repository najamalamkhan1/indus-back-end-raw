const mongoose = require("mongoose")

const Userschema = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
})

module.exports=mongoose.model("user",Userschema)
