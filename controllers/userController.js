 const asyncHandler = require("express-async-handler");
 const User = require("../models/userModel");
 const bcrypt = require("bcrypt");  // used to encrypt password
 const jwt = require("jsonwebtoken");
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
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("Please enter all fields");
    }
    const user = await User.findOne({email}); 



    if (user && (await (bcrypt.compare(password, user.password)))) {

      
        const accessToken = jwt.sign(

            {
            user : {
            user_name : user.user_name,
            email: user.email, 
            id: user.id}
        },
        process.env.ACCESS_TOKEN_SECRET,{expiresIn : "30m"}
    );
    
    res.status(200).json({ accessToken });

    } else {
        res.status(400);
        throw new Error("Invalid email or password");
    }
    

});



const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
}) ;
module.exports = {currentUser,registerUser,loginUser};
    
