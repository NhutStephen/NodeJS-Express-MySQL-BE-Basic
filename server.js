// Calling Express and Body-parser library
// Express: framework
// Body-parser: parse object
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Create an app using this framework
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to first application with NodeJS + Express + MySQl." });
});

require("./app/routes/customer.routes.js")(app);

// Set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});