const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: process.env.hostname,
  user: process.env.username,
  password: process.env.database_pass,
  database: process.env.database_name,
});

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database as id " + connection.threadId);
});

app.use(cors());

app.get("/movies", (req, res) => {
  connection.query("SELECT * FROM Movies", (error, rows) => {
    if (error) {
      console.error("Error retrieving information", error);
      res.status(500).json({ error: "Error retrieving information" });
      return;
    }
    res.json(rows);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`CORS-enabled web Server running on port ${PORT}`);
});
