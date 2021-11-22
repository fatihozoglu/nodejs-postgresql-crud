const express = require("express");
require("dotenv").config();
const db = require("./queries");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", db.getUsers);
app.get("/:id", db.getUserById);
app.post("/", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

// Setting port for server to listen
const port = process.env.PORT || 8080;
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server listening ${port} on port`);
});
