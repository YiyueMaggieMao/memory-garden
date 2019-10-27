// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const bodyParser = require('body-parser');
// Configurations for firebase
var firebaseConfig = {
    apiKey: "AIzaSyCqCe93WLs0HBzjpnSASjglXCPRtS_VVj8",
    authDomain: "memory-garden.firebaseapp.com",
    databaseURL: "https://memory-garden.firebaseio.com",
    projectId: "memory-garden",
    storageBucket: "memory-garden.appspot.com",
    messagingSenderId: "869210082385",
    appId: "1:869210082385:web:9da5e605a85b29d7e73c70",
    measurementId: "G-TJBEDJL3DF"
};

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Server will always find an open port.
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});

// Directories used
app.use(express.static("fern/public"));

// Default endpoint 
app.get('/', (req, res) => {
    // res.sendFile(__dirname + "/fern/public/index.html");
    res.sendFile(__dirname + "/fern/public/index.html");
});

// Needed to process body parameters for POST requests
app.use(bodyParser.urlencoded({ extended: true }));

