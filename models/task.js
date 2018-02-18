const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  text: {
    type: String,
    required: true
  }
}, { autoIndex: false });

module.exports = mongoose.model('Task', TaskSchema);