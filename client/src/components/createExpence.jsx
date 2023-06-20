import React from "react";

function CreateExpence() {
  return (
    <>
      <div class="mt-20 mx-auto w-1/2">
        <h1 class="text-2xl font-semibold text-center text-gray-600 mb-10">
          Create Expense
        </h1>
        <form>
          <div class="-mx-3 m-10 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md text-gray-600"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <select className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-[#6A64F1] focus:shadow-md">
                  <option value="">Select category</option>
                  <option value="food">Food</option>
                  <option value="travel">Travel</option>
                  <option value="shopping">Shopping</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              min="0"
              class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <input
                  type="date"
                  name="date"
                  id="date"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <input
                  type="text"
                  name="ammount"
                  id="ammount"
                  placeholder="Amount Spent"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button className="hover:shadow-form ml-5 rounded-md bg-red-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Cancel
            </button>
            <button className="hover:shadow-form ml-5 rounded-md bg-indigo-600 py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateExpence;
