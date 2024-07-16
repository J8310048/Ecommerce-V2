const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: process.env.DB_host,
  user: process.env.DB_user,
  port: process.env.DB_port,
  password: process.env.DB_pass,
  database: process.env.DB_name,
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

const PORT = process.env.API_PORT;
app.listen(PORT, () => {
  console.log(`CORS-enabled web Server running on port ${PORT}`);
});
