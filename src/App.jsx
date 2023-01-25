import Header from "./components/Header";
import { useEffect, useState } from "react";
import IconPlus from "./components/IconPlus";
import ListExpenses from "./components/ListExpenses";
import Modal from "./components/Modal";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);
  const [totalAvailable, setTotalAvailable] = useState(budget);
  const [expenseEdit, setExpenseEdit] = useState({});
  const [percentage, setPercentage] = useState(0);

  const handleNewExpense = () => {
    setModal(true);
    setExpenseEdit({});
  };

  const handleClose = () => {
    setModal(false);
  };

  //Calc totalSpent
  const calcTotalSpent = () => {
    let totalSpent = 0;
    expenses.map((expense) => {
      totalSpent += Number(expense.amount);
    });

    setTotalSpent(totalSpent);
  };

  //Calc totalSpent
  const calcTotalAvailable = () => {
    let total = 0;
    expenses.map((expense) => {
      total = Number(budget) - totalSpent;
    });

    setTotalAvailable(total);
  };

  const removeExpense = (id) => {
    const updateExpense = expenses.filter((expense) => expense.id !== id);
    setExpenses(updateExpense);
  };

  useEffect(() => {
    calcTotalSpent();
  }, [expenses]);

  useEffect(() => {
    calcTotalAvailable();
  }, [totalSpent]);

  useEffect(() => {
    setTotalAvailable(budget);
  }, [budget]);

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        modal={modal}
        totalSpent={totalSpent}
        totalAvailable={totalAvailable}
        percentage={percentage}
      />
      {isValidBudget && (
        <>
          <IconPlus handleNewExpense={handleNewExpense} />
          <ListExpenses
            expenses={expenses}
            setExpenseEdit={setExpenseEdit}
            setModal={setModal}
            removeExpense={removeExpense}
          />
        </>
      )}

      <Modal
        handleClose={handleClose}
        modal={modal}
        setExpenses={setExpenses}
        expenses={expenses}
        setModal={setModal}
        expenseEdit={expenseEdit}
      />
    </div>
  );
}

export default App;
