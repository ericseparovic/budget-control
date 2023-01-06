import React from "react";
import NewBudget from "./NewBudget";

export default function Header() {
  return (
    <header className="bg-purple-600 mx-auto text-center p-10 h-52">
      <h1 className="text-white text-3xl font-bold mb-8">Budget Control</h1>
      <NewBudget />
    </header>
  );
}
