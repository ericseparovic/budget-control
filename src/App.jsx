import Header from "./components/Header";
import { useState } from "react";
import IconPlus from "./components/IconPlus";
import Modal from "./components/Modal";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true);
  };

  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && <IconPlus handleNewExpense={handleNewExpense} />}

      {modal && <Modal />}
    </>
  );
}

export default App;
