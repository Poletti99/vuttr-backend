const mongoose = require('mongoose');

const ToolSchema = mongoose.Schema({
  title: String,
  link: String,
  description: String,
  tags: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Tool', ToolSchema);
