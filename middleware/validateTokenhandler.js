const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1]; // Extract the token from the header
    

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                console.log("Token Verification Error:", err); 
                res.status(401).json({ message: "Not authorized, token failed" });
               
            }
            console.log("Decoded User:", decoded.user);

            req.user = decoded.user; 
            next(); 
        });
    } else {
        res.status(401).json({ message: "Not authorized, no token" });
    }
});

module.exports = validateToken;