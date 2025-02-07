const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    user_name: {
        type: String,
        required: [true, "please add the user name"],
    },
    email: {
        type: String,
        required: [true, "please add the user email address"],
        unique:[true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "please add password"],
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model('user', userSchema);