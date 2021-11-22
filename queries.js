const pool = require("./config/database");

// Get all users in users table
const getUsers = (req, res) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (err, result) => {
    if (err) console.log(err);
    res.status(200).send(result.rows);
  });
};

// Get user with id parameter taken from the url
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM users WHERE id = $1", [id], (err, result) => {
    if (err) console.log(err);
    res.status(200).send(result.rows);
  });
};

// Create new user
const createUser = (req, res) => {
  const { name, email } = req.body;
  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email],
    (err, result) => {
      if (err) console.log(err);
      res
        .status(201)
        .send(`User with name: ${name} and email: ${email} created.`);
    }
  );
};

// Update user with id parameter taken from the url
const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

// Delete user with id parameter taken from the url
const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
