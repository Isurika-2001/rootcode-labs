const expences = `CREATE TABLE IF NOT EXISTS expences (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  date TEXT,
  category TEXT,
  amount INTEGER,
  description TEXT
)`;

const sampleData = [
  {
    title: "Sample Expense 1",
    date: "2023-06-20",
    category: "Food",
    amount: 200,
    description: "Sample expense 1 description",
  },
  {
    title: "Sample Expense 2",
    date: "2023-06-21",
    category: "Household",
    amount: 500,
    description: "Sample expense 2 description",
  },
  {
    title: "Sample Expense 3",
    date: "2023-06-22",
    category: "Transportation",
    amount: 800,
    description: "Sample expense 3 description",
  },
];

const createTable = (db) => {
  db.run(expences, (err) => {
    if (err) {
      console.log(err);
    } else {
      // Clear table
      const clearExpenses = `DELETE FROM expences`;
      db.run(clearExpenses, (err) => {
        if (err) {
          console.log(err);
        } else {
          // Insert sample data
          const insertSampleData = `INSERT INTO expences (title, date, category, amount, description) VALUES (?, ?, ?, ?, ?)`;
          sampleData.forEach((data) => {
            db.run(
              insertSampleData,
              [
                data.title,
                data.date,
                data.category,
                data.amount,
                data.description,
              ],
              (err) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Sample data inserted successfully");
                }
              }
            );
          });
        }
      });
    }
  });
};

module.exports = { createTable };
