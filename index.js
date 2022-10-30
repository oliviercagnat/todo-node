const express = require('express');

// Instantiate express app
const app = express();

// Define server port
const port = 3200;

// Create a default route
app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

// Start listening to the requests on the defined port
app.listen(port);
