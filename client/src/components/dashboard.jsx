import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [expenseSummary, setExpenseSummary] = useState([]);

  useEffect(() => {
    fetchExpenseSummary();
  }, []);

  const fetchExpenseSummary = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/getExpencesSummary"
      );
      setExpenseSummary(response.data.expencesSummary);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex mt-4">
      <div className="flex flex-col justify-end w-20">
        <div className="text-right mb-1">1000</div>
        <div className="text-right mb-1">800</div>
        <div className="text-right mb-1">600</div>
        <div className="text-right mb-1">400</div>
        <div className="text-right mb-1">200</div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          {expenseSummary.map((expense) => (
            <div
              key={expense.category}
              className={`h-8 bg-${getCategoryColor(expense.category)} w-1/6`}
              style={{ width: `${(expense.total / 1000) * 100}%` }}
            ></div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {expenseSummary.map((expense) => (
            <div key={expense.category} className="w-1/6 text-center">
              {expense.category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// function to get category color
function getCategoryColor(category) {
  switch (category.toLowerCase()) {
    case "food":
      return "green-500";
    case "household":
      return "blue-500";
    case "social life":
      return "yellow-500";
    case "transportation":
      return "red-500";
    case "health":
      return "purple-500";
    case "miscellaneous":
      return "indigo-500";
    default:
      return "gray-500";
  }
}

export default Dashboard;
