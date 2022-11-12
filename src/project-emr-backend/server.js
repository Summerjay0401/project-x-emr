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
const db = require("./app/models");
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

  // When our project is pushed to production, we will serve // the react app using express.static() middleware
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(__dirname, "../project-emr-frontend/build")));

    // Any request not caught by our API will be routed
    // to our built react app
    app.get("*", function (req, res) {
      res.sendFile(path.resolve(__dirname, "../project-emr-frontend/build", "index.html"));
    });
  }
// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/payment.routes')(app);
require('./app/routes/patient.routes')(app);
require('./app/routes/vitals.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}