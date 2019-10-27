const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const bodyParser = require('body-parser');

// Server will always find an open port.
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});

// Default endpoint 
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/fern/public/index.html");
});

// Needed to process body parameters for POST requests
app.use(bodyParser.urlencoded({ extended: true }));

