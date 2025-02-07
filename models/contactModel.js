const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' || 'user',
        required: true
    },


    name: {
        type: String,
        required: [true, "please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "please add the contact email address"],
    },
    phonenum: {
        type: String,
        required: [true, "please add the contact phone number"],
    }
}, {
    
    timestamps: true 
});

module.exports = mongoose.model('Contact', contactSchema);