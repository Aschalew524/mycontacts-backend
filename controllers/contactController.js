 // description : Get all contacts
 // route : GET /api/contacts
    // access : Public

const { get } = require("../Routes/contactRoutes");

    const getContact = (req,res) => {
        res.send("get all contacts");
    };

// description : Create a new contact
// route : POST /api/contacts   
// access : Public
const createContact = (req,res) => {
    res.send("Create a new contact");
};

// description : Get a contact with id
// route : GET /api/contacts/:id
// access : Public
const getContactById = (req,res) => {
    res.send("get contact with id: " + req.params.id);
};

// description : Update a contact with id
// route : PUT /api/contacts/:id
// access : Public  
const updateContact = (req,res) => {
    res.send("update contact with id: " + req.params.id);
};

// description : Delete a contact with id
// route : DELETE /api/contacts/:id

// access : Public
const deleteContact = (req,res) => {
    res.send("delete contact with id " + req.params.id);
};

module.exports = {getContact,
    createContact,
    getContactById,
    updateContact,
    deleteContact
};