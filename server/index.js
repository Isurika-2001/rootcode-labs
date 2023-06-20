const port = 3000;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { createTable } = require("./table");
const { expenceValidation } = require("./validation");

const sqlite3 = require("sqlite3").verbose();

// database connection
const db = new sqlite3.Database("./expences.db", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected to the expences database.");
});

// create table
createTable(db);

// allow cors
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
);

app.use(bodyParser.json());

// create expence
app.post("/createExpence", (req, res) => {
  const { title, date, category, amount, description } = req.body;
  const insertExpence = `INSERT INTO expences (title, date, category, amount, description) VALUES (?, ?, ?, ?, ?)`;
  db.run(insertExpence, [title, date, category, amount, description], (err) => {
    // check validation
    const { error } = expenceValidation(req.body);
    if (error) {
      res.send({ message: { err } });
    } else {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: "Expence created" });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
