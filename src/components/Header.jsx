import React from "react";
import NewBudget from "./NewBudget";
import BudgetControl from "./BudgetControl";

function Header({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
  totalSpent,
  totalAvailable,
  percentage,
}) {
  return (
    <header className="bg-purple-700 mx-auto text-center p-10 h-52">
      <h1 className="text-white text-3xl font-bold mb-8">Budget Control</h1>

      {isValidBudget ? (
        <BudgetControl
          budget={budget}
          totalSpent={totalSpent}
          totalAvailable={totalAvailable}
          percentage={percentage}
        />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
}

export default Header;
