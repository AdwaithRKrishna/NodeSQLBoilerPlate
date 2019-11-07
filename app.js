// This will be our application entry. We'll setup our server here.
const express = require("express");
// const logger = require("morgan"); - For logging
const bodyParser = require("body-parser");
// const multer = require("multer"); - For parsing multipart form.
const http = require("http");
const app = express();
const routes = require("./routes");
const { login, validateToken } = require("./middleware/auth");
// Follow the below link to understand how body-parser works
// https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing application/x-www-form-urlencoded
// app.use(multer()); // for parsing multipart/form-data

// Sequelize db sync
var models = require("./models");
models.sequelize
  .sync()
  .then(function() {
    console.log("Database looks fine!! enjoy using ORM");
  })
  .catch(function(err) {
    console.log("Error occured while syncing database: ", err);
  });

app.post("/login", login);

app.use(validateToken, routes);

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the beginning of nothingness."
  })
);
const server = http.createServer(app);
server.listen(3000);
module.exports = app;
