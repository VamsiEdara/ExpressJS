import express from "express";
const app = express();
const port = 5000;

// Ugly Code 😝
// app.get("/student", (req, res) => {
//   res.send("All students");
// });

// app.post("/student", (req, res) => {
//   res.send("Add New Student");
// });

// app.put("/student", (req, res) => {
//   res.send("Update Student");
// });

// app.delete("/student", (req, res) => {
//   res.send("Delete Student");
// });

// Refactor 🤗
// app.route() --> to avoid duplicate code

app
  .route("/student")
  .get((req, res) => res.send("All Students"))
  .post((req, res) => res.send("Add new Student"))
  .put((req, res) => res.send("Update Student"))
  .delete((req, res) => res.send("Remove Student"));
// -------------------

app.listen(port, () => console.log(`Server Started on port : ${port}`));
