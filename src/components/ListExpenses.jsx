import Expense from "./Expense";
import IconPlus from "./IconPlus";

function ListExpenses({
  expenses,
  setExpenseEdit,
  setModal,
  removeExpense,
  handleNewExpense,
}) {
  return (
    <main className="container mt-36 mb-20 mx-auto text-center w-full flex flex-col items-center">
      {expenses.length > 0 ? (
        <h2 className="text-white font-bold text-xl bg-purple-700 p-2 max-w-sm w-full rounded-lg">
          Expenses
        </h2>
      ) : (
        <h2 className="text-white font-bold text-xl bg-purple-700 p-2 max-w-sm w-full rounded-lg">
          There are no recorded expenses
        </h2>
      )}
      <div className="flex flex-col gap-3 w-full mt-10 relative max-w-sm">
        {expenses.map((data) => {
          return (
            <Expense
              data={data}
              key={data.id}
              setExpenseEdit={setExpenseEdit}
              setModal={setModal}
              removeExpense={removeExpense}
            />
          );
        })}

        <IconPlus handleNewExpense={handleNewExpense} />
      </div>
    </main>
  );
}

export default ListExpenses;
