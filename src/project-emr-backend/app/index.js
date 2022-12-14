const express = require("express");
const cors = require("cors");
const path = require("path");

require('dotenv').config();

const app = express();

var corsOptions = {
  origin: "http://localhost:4000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./models");
const Role = db.role;

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to application." });
// });

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/payment.routes')(app);
require('./routes/patient.routes')(app);
require('./routes/vitals.routes')(app);

// When our project is pushed to production, we will serve // the react app using express.static() middleware
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../src/project-emr-frontend/build")));

  // Any request not caught by our API will be routed
  // to our built react app
  app.get("/*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../src/project-emr-frontend/build", "index.html"));
  });
}

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
