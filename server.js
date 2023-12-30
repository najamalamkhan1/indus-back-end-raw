const express = require("express")
const userRoutes = require("./route/userRoutes")
const product = require("./route/productRoutes")
const app = express()
const connectDb = require("./db")
app.use(express.json())


app.use("/",userRoutes)
app.use("/",product)

connectDb()







app.listen(5000, () => { console.log("server is runing port 5000") })

