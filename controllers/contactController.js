const asyncHandler = require("express-async-handler"); 
const Contact = require("../models/contactModel");


// description : Get all contacts
 // route : GET /api/contacts
    // access : Public       then cahnge it to private and only authenticated user can access it
const { get } = require("../Routes/contactRoutes");

    const getContact =  asyncHandler(async (req,res) => {
        const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
    });

// description : Create a new contact
// route : POST /api/contacts   
// access : Public    then cahnge it to private and only authenticated user can access it
const createContact = asyncHandler(async (req,res) => {
    const {name,email,phonenum} = req.body;
    if (!name || !email || !phonenum) {
        console.log("please enter all fields");
        res.status(400)
        throw new Error("please enter all fields"); 
    }
    else{
        const contact = await Contact.create({
        name,
        email,
        phonenum,
        user_id: req.user.id
        });
   
    res.json(contact);}
});

// description : Get a contact with id
// route : GET /api/contacts/:id
// access : Public    then cahnge it to private and only authenticated user can access it
const getContactById = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    //res.json({message :"get contact with id: " + req.params.id});
    res.json(contact);
});

// description : Update a contact with id
// route : PUT /api/contacts/:id
// access : Public  
const updateContact = asyncHandler( async (req,res) => {
    const contact = await Contact.findById(req.params.id);
   /*  res.json({message:"update contact with id: " + req.params.id}); */
   if (!contact) {
    res.status(404);
    throw new Error("Contact not found");}

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("user Not authorized");
    }

const updatedContact = await Contact.findByIdAndUpdate(req.params.id,req.body,
    {new:true,
    runValidators:true}
);
res.status(200).json(updatedContact);
});

// description : Delete a contact with id
// route : DELETE /api/contacts/:id

// access : Public
const deleteContact = asyncHandler(async (req, res) => {
    const delcontact = await Contact.findById(req.params.id);
    if (!delcontact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    if (delcontact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("user Not authorized");
    }
    await Contact.deleteOne({ _id: req.params.id }); 
    res.status(200).json({ message: "Contact removed" });
});
module.exports = {getContact,
    createContact,
    getContactById,
    updateContact,
    deleteContact
};