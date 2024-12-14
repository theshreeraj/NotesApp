const express = require('express');
const connectDb = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();



// Middlewares
app.use(bodyParser.json());
app.use(cors());

const port = 8000;

// Connect to MongoDB
connectDb();

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// other routes
app.use('/api', require('./routes/notesRoute'));



// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});