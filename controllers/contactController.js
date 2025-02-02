const asyncHandler = require("express-async-handler");  

// description : Get all contacts
 // route : GET /api/contacts
    // access : Public
const { get } = require("../Routes/contactRoutes");

    const getContact =  asyncHandler(async (req,res) => {
    res.status(201).json({message: "get all contacts"});
    });

// description : Create a new contact
// route : POST /api/contacts   
// access : Public
const createContact = asyncHandler(async (req,res) => {
    const {name,email,phonenum} = req.body;
    if (!name || !email || !phonenum) {
        console.log("please enter all fields");
        res.status(400)
        throw new Error("please enter all fields"); 
    }
    else{
    console.log(req.body);
    res.json({message: "Create a new contact"});}
});

// description : Get a contact with id
// route : GET /api/contacts/:id
// access : Public
const getContactById = asyncHandler(async (req,res) => {
    res.json({message :"get contact with id: " + req.params.id});
});

// description : Update a contact with id
// route : PUT /api/contacts/:id
// access : Public  
const updateContact = asyncHandler( async (req,res) => {
    res.json({message:"update contact with id: " + req.params.id});
});

// description : Delete a contact with id
// route : DELETE /api/contacts/:id

// access : Public
const deleteContact =asyncHandler( async (req,res) => {
    res.json({message: "delete contact with id " + req.params.id});
});

module.exports = {getContact,
    createContact,
    getContactById,
    updateContact,
    deleteContact
};