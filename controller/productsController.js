const Product = require("../model/product")


exports.createProduct = async(req,res)=>{
try{
    const {productName,price} = req.body
    const proimg = req.file.path
    console.log(proimg)
    const product = await new Product({
        productName,
        price,
        proimg
    })
    product.save()
    res.status(200).json("product is created")
}catch(e){console.log(e)}
}