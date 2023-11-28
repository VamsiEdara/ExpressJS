import express from "express";
const app = express();
const port = 5000;

// Array of callbacks
const cb1 = (req, res, next) => {
  console.log("First callback");
  next();
};

const cb2 = (req, res, next) => {
  console.log("Second callback");
  next();
};

const cb3 = (req, res) => {
  console.log("Third callback");
  res.send("Array of callbacks (response)");
};

// Passing array of callbacks
app.get("/cbexample3", [cb1, cb2, cb3]);

// -------------------
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
