const constants = require('../constants'); // Adjust the path as necessary

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode); // Set the response status code

    switch (statusCode) {
        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error", // Fixed typo here
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        default:
            console.error(err); // Log the error for debugging
            res.json({
                title: "Error",
                message: "An unexpected error occurred.",
                stackTrace: err.stack,
            });
            break;
    }
};

module.exports = errorHandler;