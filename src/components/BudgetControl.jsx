import React from "react";

function BudgetControl({ budget, totalSpent}) {
  const formatQuantity = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <div className="max-w-xl flex m-auto gap-5 bg-white p-4 rounded-lg shadow-2xl absolute left-0 right-0 top-32 h-40">
      <div>
        <h3>Grafica</h3>
      </div>
      <div className="text-left text-lg">
        <p className="text-purple-700 font-bold">
          Presupuesto:{" "}
          <span className="text-gray-500">{formatQuantity(budget)}</span>
        </p>
        <p className="text-purple-700 font-bold">
          Disponible:{" "}
          <span className="text-gray-500">{formatQuantity(budget)}</span>
        </p>

        <p className="text-purple-700 font-bold">
          Gastado:{" "}
          <span className="text-gray-500">{formatQuantity(totalSpent)}</span>
        </p>
      </div>
    </div>
  );
}

export default BudgetControl;
