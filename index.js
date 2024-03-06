const express = require("express");
const coursesRouter = require("./routes/routes.courses");
const app = express();

app.use(express.json());
app.use("/", coursesRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000...");
  console.log("http://localhost:3000");
});
