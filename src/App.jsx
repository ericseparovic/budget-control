import Header from "./components/Header";
import { useState } from "react";
import IconPlus from "./components/IconPlus";
import Modal from "./components/Modal";
import Main from "./components/Main";

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
    <div>
       <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        modal={modal}
      />
      {isValidBudget &&
        (
          <>
            <IconPlus handleNewExpense={handleNewExpense} />
            <Main expenses={expenses} />
          </>
        )
      }

      <Modal
        handleClose={handleClose}
        modal={modal}
        setExpenses={setExpenses}
        expenses={expenses}
    setModal={setModal}
      />
    </div>
  )
}

export default App;
