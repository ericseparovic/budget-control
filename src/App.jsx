import Header from "./components/Header";
import { useEffect, useState } from "react";
import IconPlus from "./components/IconPlus";
import Modal from "./components/Modal";
import Main from "./components/Main";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0)
  const [totalAvailable, setTotalAvailable] = useState(budget)

  const handleNewExpense = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  useEffect(() => {
    calcTotalSpent()

  }, [expenses])

  //Calc totalSpent
  function calcTotalSpent(){
    let totalSpent = 0
    expenses.map(expense => {
      totalSpent +=  Number(expense.amount)
    })

    setTotalSpent(totalSpent)

  }

  useEffect(() => {
    calcTotalAvailable()
  }, [totalSpent])


//Calc totalSpent
  function calcTotalAvailable(){
    let total = 0
    expenses.map(expense => {


      total = Number(budget) - totalSpent
    })

    setTotalAvailable(total)
  }

//saves the quantity available when the budget is indicated
  useEffect(() => {
    setTotalAvailable(budget)
  }, [budget])

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
