const mongoose = require("mongoose")

const productschema = mongoose.Schema({
    productName:{type:String},
    price:{type:String},
    proimg:{type:String}
})

module.exports=mongoose.model("product",productschema)
