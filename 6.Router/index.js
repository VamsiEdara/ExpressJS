import express from "express";
import student from "./Route/student.js";
import teacher from "./routes/teacher.js";

const app = express();
const port = 5000;

// First check this link out 👇
// http://expressjs.com/en/5x/api.html#router

// 1. Create routes folder and put your routes in a seperate file.
// 2. Create instance of express.Router()
// 3. Instead of app.method change that to "router.method"
// 4. Export router from a specific file
// -------
// 5. Import route in index.js file
// 6. use the (app.use) built-in middleware & provide your routes.

// Load Router Modules
app.use("/student", student);
// ⚠️ Make sure of which http method(get,post,delete....) is being used for corresponding Url
// http://localhost:5000/student/all
// http://localhost:5000/student/create
// http://localhost:5000/student/update
// http://localhost:5000/student/delete

app.use("/teacher", teacher);
// http://localhost:5000/teacher/all
// http://localhost:5000/teacher/create
// http://localhost:5000/teacher/update
// http://localhost:5000/teacher/delete

// -------------------

app.listen(port, () => console.log(`Server Started on port : ${port}`));
