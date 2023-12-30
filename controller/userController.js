const User = require("../model/UserModel")

exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await new User({
            name, email, password
        })
        newUser.save()
        res.status(200).json("user created")
    } catch (e) { console.log(e) }
}