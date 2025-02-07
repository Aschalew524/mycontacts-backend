const express = require('express');
const router = express.Router();
const {getContact,
    createContact,
    getContactById,
    updateContact,
    deleteContact
} = require("../controllers/contactController");
const validateToken = require('../middleware/validateTokenhandler');

router.use("validateToken", require("../middleware/validateTokenhandler")); // this is how you can use middleware in routes
router.route("/:id").get(getContactById);  


router.route("/").get(validateToken,getContact).post(validateToken,createContact);   // merged bc both routes are same, I can do for the other 3 too

router.route("/:id").put(validateToken,updateContact); 

router.route("/:id").delete(validateToken,deleteContact); 
  
module.exports = router;      