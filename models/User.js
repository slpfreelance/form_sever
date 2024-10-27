// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number,
    address: String,
});

module.exports = mongoose.model('User', userSchema);
