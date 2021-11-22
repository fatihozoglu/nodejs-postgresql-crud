const router = require("express").Router();
const db = require("./queries");

// Routing for "/"
router.get("/", db.getUsers); // localhost:8080
router.get("/:id", db.getUserById); // localhost:8080/:id
router.post("/", db.createUser); // localhost:8080
router.put("/:id", db.updateUser); // localhost:8080/:id
router.delete("/:id", db.deleteUser); // localhost:8080/:id

module.exports = router;
