const express = require('express');
const connectDB = require('./config/dbconnection');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');



connectDB();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());


// Define your routes
app.use("/api/contacts", require("./Routes/contactRoutes"));

// Error handling middleware should be placed last
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});