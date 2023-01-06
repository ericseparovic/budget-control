import React from "react";

function NewBudget() {
  return (
    <div className="max-w-md flex flex-col m-auto gap-5 bg-white p-4 rounded-lg shadow-2xl absolute left-0 right-0 top-32">
      <h2 className="text-purple-700 font-bold text-xl ">New Budget</h2>
      <input className="rounded-lg p-2 bg-slate-200 text-center" type="text" />
      <input
        className="bg-purple-900 text-white rounded-lg p-2"
        type="button"
        value="Add"
      />
    </div>
  );
}

export default NewBudget;
