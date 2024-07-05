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

// ----**********-----------

// Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).



// Each route can have one or more handler functions, which are executed when the route is matched.
// app.METHOD(PATH, HANDLER)
// app is an instance of express.
// METHOD is an HTTP request method, in lowercase.
// PATH is a path on the server.
// HANDLER is the function executed when the route is matched.

app.get("/", (req, res) => {
  res.send("<h1>HOME 🏠 </h1>");
});

app.post('/', (req, res) => {
  res.send('Got a POST request')
})
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => console.log(`Server Started on port : ${port}`));
