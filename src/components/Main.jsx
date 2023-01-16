import Expense from "./Expense";

function Main() {

  return (
    <main className="container mt-36 mx-auto w-full text-center w-full">
      <h2 className="text-slate-700 font-bold text-xl">Expenses</h2>
      <div className="flex flex-col gap-3 w-full mt-10">
        <Expense />
      </div>
    </main>
  )
}

export default Main;
