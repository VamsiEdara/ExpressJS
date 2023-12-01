import express from "express";
const app = express();
const port = 5000;
// ---------------------

// Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the (req.params) object, with the name of the route parameter specified in the path as their respective keys.

// Getting Route Params 👇
// Example-1:
//localhost:5000/student/delete/20
// app.get("/student/delete/:id", (req, res) => {
//   res.send(req.params); //--> 20
//   const { id } = req.params;
//   res.send(`Student No: ${req.params.id} delete.`);
// });

// Example-2:
// http://localhost:5000/ecom/products/iphone/14 --> Iphone 14 Pro Max
// app.get("/ecom/products/iphone/:model", (req, res) => {
//   const { model } = req.params;
//   res.send(`Iphone ${model} Pro Max`);
// });

// -----------------------

// Passing Multiple Route Params
// http://localhost:5000/ecom/product/iphone/15 --> Product Category (iphone) & id (15)
// app.get("/product/:category/:id", (req, res) => {
//   const { category, id } = req.params;
//   res.send(`Product Category: (${category}), Product Id: (${id})`);
// });

// Complexcity
// http://localhost:5000/product/order/21/05/2023 --> Product was ordered on : 21/05/2023
// app.get("/product/order/:day/:month/and/:year", (req, res) => {
//   const { day, month, year } = req.params;
//   res.send(`Product was ordered on: ${day}/${month}/${year}`);
// });

// -----------------------

// The app.params() function is used to add the callback triggers to route parameters.
// It is commonly used to check for the existence of the data requested related to the route param.
// app.param(name, callback)

// http://localhost:5000/user/100
app.param("id", (req, res, next, id) => {
  console.log(`id: ${id}`);
  next();
});

app.get("/user/:id", (req, res) => {
  console.log("This is User ID Path");
  res.send("Response Ok");
});

// Thid code will not work 👇
// app.param("year", (req, res, next, year) => {
//   console.log(`year: ${year}`);
//   next();
// });

// -----------------------
app.listen(port, () => console.log(`Server Started on port : ${port}`));
