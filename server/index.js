const express = require("express");
const path = require("path");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("build"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

let port = process.env.PORT;
// start express server on port 5000
app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
