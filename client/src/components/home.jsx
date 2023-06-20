import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Home() {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getExpences");
      setExpenses(response.data.expences);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await axios.delete(
          `http://localhost:3000/deleteExpence/${id}`
        );
        if (response.data.message === "Expense deleted") {
          Swal.fire("Deleted!", "Your expense has been deleted.", "success");
          fetchExpenses();
        } else {
          Swal.fire("Error!", response.data.message, "error");
        }
        // refresh the page

        // refresh the expenses list
        fetchExpenses();

        // window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* category filter */}
      <div className="flex justify-center items-center mt-4">
        <select
          className="border border-black p-3 rounded lg:inline-block w-1/3"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select category</option>
          <option value="Food">Food</option>
          <option value="Household">Household</option>
          <option value="Social Life">Social Life</option>
          <option value="Transportation">Transportation</option>
          <option value="Health">Health</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
      </div>

      {/* expenses card */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "10px",
        }}
      >
        {expenses
          .filter((expense) =>
            selectedCategory ? expense.category === selectedCategory : true
          )
          .map((expense) => (
            <div
              key={expense.id}
              className="bg-white m-10 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs"
            >
              <h1 className="text-lg text-gray-700">{expense.title}</h1>
              <h3 className="text-sm text-gray-400">
                Category: {expense.category}
              </h3>
              <p className="text-xs text-gray-500 mt-4">
                {expense.description}
              </p>
              <div className="text-xs text-gray-400 mt-4">
                Date: {expense.date}
              </div>
              <div className="flex justify-center space-x-4 mt-8">
                <a
                  href={`/editExpense/${expense.id}`}
                  className="bg-indigo-600 px-4 py-2 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide text-xs cursor-pointer"
                >
                  edit
                </a>
                <a
                  onClick={() => handleDelete(expense.id)}
                  className="bg-indigo-600 px-4 py-2 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide text-xs cursor-pointer"
                >
                  delete
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Home;
