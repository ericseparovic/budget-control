import Header from "./components/Header";
import { useState } from "react";
import IconPlus from "./components/IconPlus";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      <IconPlus />
    </>
  );
}

export default App;
