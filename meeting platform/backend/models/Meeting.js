const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  email: String,
  title: String,
  date: Date,
  status: String,
});

module.exports = mongoose.model('Meeting', meetingSchema);
