const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model('Example', exampleSchema);
