const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/meetings', { useNewUrlParser: true, useUnifiedTopology: true });

// Models
const Meeting = require('./models/Meeting');
const User = require('./models/User');

// Routes
app.use('/api/meetings', require('./routes/meetings'));
app.use('/api/users', require('./routes/users'));

app.listen(port, () => console.log(`Server running on port ${port}`));
