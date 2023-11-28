import express from "express";
const app = express();
const port = 5000;

// Route callback can be in the form of
//  - Single Callback Function
//  - More then one callback
//  - Array Of Function
//  - Combination Of Both

// ----------------------------
// One Callback Function 🛫
// app.get("/", (req, res) => res.send("Single Callback"));
// ----------------------------

// ----------------------------

app.get("/", (req, res) => {
  res.send("<h2>Single Callback</h2>");
});

app.get("/product/iphone", (req, res) => {
  res.send("<h2>Iphone related products</h2>");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
