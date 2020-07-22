require('dotenv').config()  // Initialize our protected environment variables
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose')
const routes = require('./routes');

app.use(express.urlencoded({ extended: true })); // Parses incoming requests with urlencoded payloads 
app.use(express.json()); // Parses incoming requests with JSON payloads 
app.use(routes); // Backend routes will come from our routes file

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Connect to our mongo database server
try {
  mongoose.connect(process.env.MONGODB_URI, {
    // use mongodb v4 connection settings
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });  
} catch (err) {
  `Connection to mongo server failed: ${err}`;
}

// Start server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
