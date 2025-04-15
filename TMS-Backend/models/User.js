const mongoose = require('mongoose');

const User1 = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String }
});

module.exports = mongoose.model('User1', User1);