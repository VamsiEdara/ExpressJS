const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Welcome");
  console.log(res);
});
app.get("/date", (req, res) => {
  let date = new Date();
  res.send(`Today date id ${date}`);
});
app.get("/html", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});
app.listen(port);
