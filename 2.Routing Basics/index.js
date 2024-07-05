import express from "express";
const app = express();
const port = 5000;

// Install nodemon and add below line in package,json file
// "scripts": {
//   "start": "nodemon index.js"
// } 
// -----> npm start

// "scripts": {
//   "dev": "nodemon index.js"
// }
// -----> npm run dev

// Routing refers to how an application’s endpoints (URIs) respond to client requests.

// ----------HTTP Methods--------------
// GET👉 Retrieve Data
// POST 👉 Create/Insert Data
// PUT 👉 Completely Update Data
// PATCH 👉 Partially Update Data
// DELETE 👉 Delete Data
// ALL 👉 Any HTTP Request Method

// basic routes
// app-->instance,
// .get-->http method
// ("/")-->fle path

app.get("/", (req, res) => {
  res.send("<h1>HOME 🏠 </h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>ABOUT 😶‍🌫️ </h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>CONTACT 📲 </h1>");
});

app.get("/work", (req, res) => {
  res.send("<h1>MY WORK 💪 </h1>");
});

app.listen(port, () => console.log(`Server Started on port : ${port}`));
