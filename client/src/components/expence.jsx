import React from "react";

function Expense() {
  return (
    <>
      <div className="bg-white m-10 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
        <h1 className="text-lg text-gray-700">Spent at keels</h1>
        <h3 className="text-sm text-gray-400">Category</h3>
        <p className="text-xs text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="text-xs text-gray-400 mt-4">Date: June 20, 2023</div>
        <div className="flex justify-center space-x-4 mt-8">
          <a href="/createExpence" className="bg-indigo-600 px-4 py-2 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide text-xs">
            edit
          </a>
          <a className="bg-indigo-600 px-4 py-2 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide text-xs">
            delete
          </a>
        </div>
      </div>
    </>
  );
}

export default Expense;
