const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetchAPI = require("./meaningCloud");

// setup dotenv
const dotenv = require("dotenv");
dotenv.config();

// instantiate app
const app = express();

// setup aylien API
// const aylien = require("aylien_textapi");
// const textapi = new aylien({
//   application_id: process.env.API_ID,
//   application_key: process.env.API_KEY,
// });

// setup express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup main project folder
app.use(express.static("dist"));

// setup Cors for cross origin allowance
app.use(cors());

// ---- ROUTES

// -- setup Home route endpoint
app.get("/", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

// -- setup Submit route endpoint
app.post("/submit", async (req, res) => {
  const userInput = req.body;

  try {
    const apiData = await fetchAPI(userInput);
    sentimentAnalysis = JSON.stringify(apiData);
    res.status(200).send(sentimentAnalysis);
  } catch (e) {
    res.status(400).send(e);
  }
});

// spin server
const port = 2099;
app.listen(port, function () {
  console.log(`App listening on port ${port}`);
});

// // Post route
// app.post("/database", (req, res) => {
//   const {
//     polarity,
//     subjectivity,
//     text,
//     polarity_confidence,
//     subjectivity_confidence,
//   } = req.body;

//   let newData = {};
//   newData.polarity = polarity;
//   newData.subjectivity = subjectivity;
//   newData.text = text;
//   newData.polarity_confidence = polarity_confidence;
//   newData.subjectivity_confidence = subjectivity_confidence;

//   // pushing data to the database variable
//   dataAPIResponse.push(newData);

//   res.send(dataAPIResponse);
// });

// // GET route that request all data from the database
// app.get("/all", (req, res) => {
//   console.log(dataAPIResponse);

//   res.send(dataAPIResponse);
// })
