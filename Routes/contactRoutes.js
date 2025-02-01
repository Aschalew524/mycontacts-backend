const express = require('express');
const router = express.Router();
const {getContact,
    createContact,
    getContactById,
    updateContact,
    deleteContact
} = require("../controllers/contactController");


router.route("/:id").get(getContactById);  


router.route("/").get(getContact).post(createContact);   // merged bc both routes are same, I can do for the other 3 too

router.route("/:id").put(updateContact); 

router.route("/:id").delete(deleteContact); 
  
module.exports = router;      