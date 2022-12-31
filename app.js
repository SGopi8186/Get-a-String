const express = require("express");

const app = express();

app.get("/", (request, respond) => {
  respond.send("Express JS");
});

module.exports = app;
