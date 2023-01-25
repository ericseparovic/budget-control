import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function BudgetControl({ budget, totalSpent, totalAvailable, percentage }) {
  const formatQuantity = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="max-w-sm flex m-auto gap-5 bg-white p-4 rounded-lg shadow-2xl absolute left-0 right-0 top-32 h-40 items-center justify-between">
      <div className="w-28 relative">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({ pathColor: `bg-purple-700` })}
        />
      </div>
      <div className="text-left md:text-lg">
        <p className="text-purple-700 font-bold">
          Presupuesto:{" "}
          <span className="text-gray-500">{formatQuantity(budget)}</span>
        </p>
        <p className="text-purple-700 font-bold">
          Disponible:{" "}
          <span className="text-gray-500">
            {formatQuantity(totalAvailable)}
          </span>
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
