const express = require("express");
require("dotenv").config();
const router = require("./router");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

// Setting port for server to listen
const port = process.env.PORT || 8080;
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server listening ${port} on port`);
});
