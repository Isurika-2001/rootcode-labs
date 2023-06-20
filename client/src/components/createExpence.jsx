import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function CreateExpence() {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    amount: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchExpenseDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/getExpence/${id}` // Corrected the URL spelling
        );
        const expense = response.data.expence; // Extract the expense data from the response
        setInputs(expense);
      } catch (err) {
        console.log(err);
      }
    };

    if (id) {
      fetchExpenseDetails();
    }
  }, [id]);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // update existing expense
        const response = await axios.put(
          `http://localhost:3000/updateExpence/${id}`,
          inputs
        );
        if (response.data.message === "Expense updated") {
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      } else {
        // insert new expense
        const response = await axios.post(
          "http://localhost:3000/createExpence",
          inputs
        );
        if (response.data.message === "Expense created") {
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="mt-20 mx-auto w-1/2">
      <h1 className="text-2xl font-semibold text-center text-gray-600 mb-10">
        Create Expense
      </h1>
      <form>
        <div className="-mx-3 m-10 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                placeholder="Title"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md text-gray-600"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <select
                name="category"
                value={inputs.category}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-[#6A64F1] focus:shadow-md"
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
          </div>
        </div>
        <div className="mb-5">
          <textarea
            type="text"
            name="description"
            value={inputs.description}
            onChange={handleChange}
            placeholder="Description"
            min="0"
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="date"
                name="date"
                value={inputs.date}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <input
                type="text"
                name="amount"
                value={inputs.amount}
                onChange={handleChange}
                placeholder="Amount Spent (LKR)"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button className="hover:shadow-form ml-5 rounded-md bg-red-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="hover:shadow-form ml-5 rounded-md bg-indigo-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateExpence;
