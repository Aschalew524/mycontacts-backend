 const asyncHandler = require("express-async-handler");
 const User = require("../models/userModel");
 const bcrypt = require("bcrypt");  // used to encrypt password
 const registerUser = asyncHandler(async (req, res) => {
    const { user_name, email, password } = req.body;

    if (!user_name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all fields");
    }

    const userAvailable = await User.findOne({email});
    if (userAvailable){
        res.status(400);
        throw new Error("User already   exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const user = await User.create({
        user_name,
        email,
        password: hashedPassword
    });
    res.status(201).json(user);

    res.json({ message: "Register a user" });
});










const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "login a user" });

});



const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "current user information" });
}) ;
module.exports = {currentUser,registerUser,loginUser};
    
