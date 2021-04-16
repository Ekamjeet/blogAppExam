const mongoose = require('mongoose');

const newUserSchema = new mongoose.Schema({
    Firstname: {
        type: String,
        unique: true,
        required: true
    },
    Lastname: {
        type: String,
        unique: true,
        required: true
    },
    Username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('newuser', newUserSchema);