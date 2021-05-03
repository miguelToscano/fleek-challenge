
const mongoose = require('mongoose');
const requests = require('./Request')
const Schema = mongoose.Schema;

const ApiKeySchema = new Schema({
  value: String,
  active: Boolean,
  createdAt: Date,
  disabledAt: Date,
  requests: [requests.RequestSchema]
});

module.exports = mongoose.model('ApiKey', ApiKeySchema);