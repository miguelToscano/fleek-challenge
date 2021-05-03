
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  hashedPassword: String,
  createdAt: Date
});

module.exports = mongoose.model('User', UserSchema);