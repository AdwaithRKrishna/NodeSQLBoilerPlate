// This will be our application entry. We'll setup our server here.
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const multer = require("multer");
const http = require("http");
const app = express();
const routes = require("./routes");

// Follow the below link to understand how body-parser works
// https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing application/x-www-form-urlencoded
// app.use(multer()); // for parsing multipart/form-data

// Sequelize db sync
var models = require("./models");
debugger
models.sequelize.sync().then(function(){
  console.log("Database looks fine!! enjoy using ORM")
}).catch(function(err){
  console.log("Error occured: ",err);
})



app.use(routes);

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the beginning of nothingness."
  })
);
const server = http.createServer(app);
server.listen(3000);
module.exports = app;
