import React from "react";
import Error from "./Error";
import { useState } from "react";

function NewBudget({ budget, setBudget, setIsValidBudget }) {
  const [message, setMessage] = useState("");

  const handleBudget = (e) => {
    e.preventDefault();

    if (!budget || Number(budget) < 0) {
      setMessage("It is not a valid budget");
      return;
    } else {
      setMessage("");
      setIsValidBudget(true);
    }
  };

  return (
    <div className="max-w-md flex flex-col m-auto gap-5 bg-white p-4 rounded-lg shadow-2xl absolute left-0 right-0 top-32 h-40">
      <h2 className="text-purple-700 font-bold text-xl ">New Budget</h2>
      <form className="flex justify-center gap-2" onSubmit={handleBudget}>
        <input
          className="rounded-lg p-2 bg-slate-200 text-center outline-purple-700"
          type="number"
          placeholder="Add budget"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
        <input
          className={`bg-purple-700 text-white rounded-lg p-2 cursor-pointer hover:bg-purple-900`}
          type="submit"
          value="Add"
        />
      </form>
      {message && <Error message={message} />}
    </div>
  );
}

export default NewBudget;
