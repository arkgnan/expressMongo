const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const schema = new Schema({
  name: String,
  age: Number,
  hobby: String,
});

module.exports = mongoose.model('users',schema);