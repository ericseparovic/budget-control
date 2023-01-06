import React from "react";

function BudgetControl({ budget }) {
  const formatQuantity = (count) => {
    return count.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <div className="bg-slate-50 rounded-xl flex justify-center gap-4 p-6 shadow-xl">
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
          <span className="text-gray-500">{formatQuantity(budget)}</span>
        </p>
      </div>
    </div>
  );
}

export default BudgetControl;
