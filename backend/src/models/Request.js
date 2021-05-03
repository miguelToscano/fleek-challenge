
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  path: String,
  createdAt: Date
});

module.exports = {
  RequestModel: mongoose.model('Request', RequestSchema),
  RequestSchema
}