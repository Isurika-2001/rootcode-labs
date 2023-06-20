import React from "react";
import Expence from "./expence";

function Home() {
  return (
    <>
      <div className="flex justify-center items-center mt-4">
        <select className="border border-black p-3 rounded lg:inline-block w-1/3">
          <option value="all">Select category</option>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="shopping">Shopping</option>
          <option value="others">Others</option>
        </select>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "10px",
        }}
      >
        <Expence />
        <Expence />
        <Expence />
        <Expence />
        <Expence />
        <Expence />
        <Expence />
        <Expence />
      </div>
    </>
  );
}

export default Home;
