import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2";


dotenv.config();

const app = express();

// Configured MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_host,
  user: process.env.DB_user,
  port: process.env.DB_port,
  password: process.env.DB_pass,
  database: process.env.DB_name,
});


app.use(cors());


app.get("/", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting connection from pool:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    connection.query("SELECT * FROM Movies", (error, rows) => {
      connection.release(); // Release the connection back to the pool

      if (error) {
        console.error("Error retrieving information:", error);
        res.status(500).json({ error: "Error retrieving information" });
        return;
      }

      res.json(rows);
    });
  });
});


app.get("/genres", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting connection from pool:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    

    connection.query("SELECT * FROM Genre", (error, rows) => {
      connection.release(); // Release the connection back to the pool

      if (error) {
        console.error("Error retrieving information:", error);
        res.status(500).json({ error: "Error retrieving information" });
        return;
      }
      console.log(rows)
      res.json(rows);
    });
  });
});



app.get("/movies-by-genre/:genreId", (req, res) => {
  const genreId = req.params.genreId;
  console.log("Received request for genreId:", genreId)
  
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting connection from pool:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const query = `
      SELECT Movies.*
      FROM Movies
      JOIN movie_genre ON Movies.id = movie_genre.movie_id
      WHERE movie_genre.genre_id = ?
    `;

    connection.query(query, [genreId], (error, rows) => {
      connection.release(); // Release the connection back to the pool

      if (error) {
        console.error("Error retrieving information:", error);
        res.status(500).json({ error: "Error retrieving information" });
        return;
      }

      // const priceMax = req.query.priceMax;
      // console.log("Here's the maximum price:", priceMax)
      // res.send("Search results:", priceMax);

      res.json(rows);
    });
  });
});



const PORT = process.env.Local_Port || 3000;
app.listen(PORT, () => {
  console.log(`CORS-enabled web server running on port ${PORT}`);
});

