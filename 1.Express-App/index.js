// 1. npm init -y
// 2. Install express (npm install express --save)
// 3. Get Express Into Your Project (require("express"))
// 4. Create instance of Express (const app = express())
// 5. Provide port (app.listen(5000, () => console.log("port 5000")))
// 6. basic rout (app.get(path, callback function)) --> This callback has two arguments 1) req 2) res
// 7. Install nodemon if you require

import express from "express";
// If you use import then update your package.json file with "type": "module"
const app = express();
const port = 3000;

// 👇 Don't worry about this code
app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.listen(port, () => console.log(`Server started on port : ${port}`));
