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

// get all expences
app.get("/getExpences", (req, res) => {
  const getExpences = `SELECT * FROM expences`;
  db.all(getExpences, (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ expences: rows });
    }
  });
});

// get expence by id
app.get("/getExpence/:id", (req, res) => {
  const id = req.params.id;
  const getExpence = `SELECT * FROM expences WHERE id = ?`;
  db.get(getExpence, [id], (err, row) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ expence: row });
    }
  });
});

// update expence
app.put("/updateExpence/:id", (req, res) => {
  const id = req.params.id;
  const { title, date, category, amount, description } = req.body;
  const updateExpence = `UPDATE expences SET title = ?, date = ?, category = ?, amount = ?, description = ? WHERE id = ?`;
  db.run(
    updateExpence,
    [title, date, category, amount, description, id],
    (err) => {
      // check validation
      const { error } = expenceValidation(req.body);
      if (error) {
        res.send({ message: { err } });
      } else {
        if (err) {
          console.log(err);
        } else {
          res.send({ message: "Expence updated" });
        }
      }
    }
  );
});

// delete expence
app.delete("/deleteExpence/:id", (req, res) => {
  const id = req.params.id;
  const deleteExpence = `DELETE FROM expences WHERE id = ?`;
  db.run(deleteExpence, [id], (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: "Expence deleted" });
    }
  });
});

// get expences summary according to category
app.get("/getExpencesSummary", (req, res) => {
  const getExpencesSummary = `SELECT category, SUM(amount) AS total FROM expences GROUP BY category`;
  db.all(getExpencesSummary, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "An error occurred" });
    } else {
      res.json({ expencesSummary: rows });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
