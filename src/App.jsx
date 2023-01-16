import Header from "./components/Header";
import { useState } from "react";
import IconPlus from "./components/IconPlus";
import Modal from "./components/Modal";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleNewExpense = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
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

      <Modal
        handleClose={handleClose}
        modal={modal}
        setExpenses={setExpenses}
        expenses={expenses}
      />
    </>
  );
}

export default App;
