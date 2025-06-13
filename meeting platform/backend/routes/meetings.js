const express = require('express');
const router = express.Router();
const Meeting = require('../models/Meeting');

// Get all meetings
router.get('/', async (req, res) => {
  const meetings = await Meeting.find();
  res.json(meetings);
});

// Create a new meeting
router.post('/', async (req, res) => {
  const meeting = new Meeting(req.body);
  await meeting.save();
  res.json(meeting);
});

// Update meeting status
router.put('/:id', async (req, res) => {
  const updated = await Meeting.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

module.exports = router;
