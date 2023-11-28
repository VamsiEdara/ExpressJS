import express from "express";
const app = express();
const port = 3000;

// Routing refers to how an application’s endpoints (URIs) respond to client requests.

// ----------HTTP Methods--------------
// GET ➡️⏩➡️ Retrieve Data
// POST ➡️⏩➡️ Create/Insert Data
// PUT ➡️⏩➡️ Completely Update Data
// PATCH ➡️⏩➡️ Partially Update Data
// DELETE ➡️⏩➡️ Delete Data
// ALL ➡️⏩➡️ Any HTTP Request Method

// basic routes
// app-->instance,
// .get-->http method
// ("/")-->fle path

// app.get("/", (req, res) => {
//   res.send("<h1>Advance Routing</h1>");
// });

// ------ADVANCE ROUTING ---------

// --------------------------------------
// String Pattern Path
app.get("/ab?cd", (req, res) => {
  res.send("If the user hit (acd) or (abcd) then this code will run.");
});

// --------------------------------------

// --------------------------------------
// Regular Expression (Regex) Path
app.get(/v/, (req, res) => {
  res.send("If the path includes the letter (v) it will work");
});

// Matches requests to /users/ followed by any 4-digit number
// /users/1234 (http://localhost:3000/users/1234)
app.get(/^\/users\/[0-9]{4}$/, function (req, res) {
  res.send("Working");
});
// --------------------------------------
//nested routes (http://localhost:3000/products/iphone)
app.get("/products/iphone", (req, res) => {
  res.send("This code will run only if you provide /products/iphone");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
