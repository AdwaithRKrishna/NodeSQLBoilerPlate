// This will be our application entry. We'll setup our server here.
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const http = require("http");
const app = express();

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the beginning of nothingness."
  })
);

const server = http.createServer(app);
server.listen(3000);
module.exports = app;
