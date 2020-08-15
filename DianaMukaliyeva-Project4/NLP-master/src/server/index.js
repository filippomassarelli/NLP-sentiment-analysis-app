/* Global Variables */

const path = require('path');
const express = require('express');
const aylien = require("aylien_textapi");
const cors = require("cors");
const bodyParser = require('body-parser');

// Setup dotenv
const dotenv = require('dotenv');
dotenv.config();

// Start up an instance of app
const app = express();

// set aylien API credentials
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

//Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static('dist'));

// Cors for cross origin allowance
app.use(cors());

/* Endpoints */

// Our endpoint to get main page
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Our endpoint to get analys from Aylien
app.post('/analys', function (req, res) {
    textapi.sentiment(req.body, function(error, response) {
        if (error === null) {
            res.status(200).send(response);
        } else {
            res.status(422).send(error);
        }
    });
})

// Setup Server
app.listen(process.env.PORT || 8081, function () {
    console.log(`NLP app listening on port 8081!`);
})
