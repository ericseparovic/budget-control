import { useEffect } from "react";
import nextId from "react-id-generator";
import ImgClose from "../assets/icons/close.png";
import { useForm } from "react-hook-form";

function Modal({
  handleClose,
  modal,
  setExpenses,
  expenses,
  setModal,
  expenseEdit,
  date,
  setDate,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    //Update
    if (data.id) {
      const expensesUpdate = expenses.map((expenseState) => {
        if (expenseState.id === data.id) {
          return data;
        } else {
          return expenseState;
        }
      });

      setExpenses(expensesUpdate);
    } else {
      //New expense
      data.id = nextId();
      data.date = date;
      setExpenses([...expenses, data]);
    }

    reset();
    setModal(false);
  };

  useEffect(() => {
    setValue("expense", expenseEdit.expense);
    setValue("amount", expenseEdit.amount);
    setValue("category", expenseEdit.category);
    setValue("id", expenseEdit.id);
    setValue("date", expenseEdit.date);
  }, [expenseEdit]);

  return (
    <div
      className={`fixed bg-slate-600 w-full h-screen top-0 mx-auto transition-all translate-x-full duration-300 max-h-screen ${
        modal && "translate-x-0"
      }`}
    >
      <div className="fixed w-8 cursor-pointer right-5 top-5">
        <img src={ImgClose} alt="icon-close" onClick={handleClose} />
      </div>
      <div className="flex place-items-center p-10 flex-col max-w-md mx-auto">
        <h3 className="text-2xl text-white uppercase mb-10 mt-10 font-bold">
          {expenseEdit.expense ? "Edit Expense" : "New Expense"}
        </h3>

        <form
          action=""
          className="flex flex-col border-t-2 pt-4 border-purple-800 gap-6 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col ">
            <label
              className="text-white font-bold text-xl mb-2"
              htmlFor="amount"
            >
              Name Expense
            </label>
            <input
              type="text"
              placeholder="Add expense"
              className="rounded-md p-1 text-gray-600 outline-purple-700"
              id="amount"
              {...register("expense", { required: true })}
            />
            {errors.expense && (
              <span className="text-pink-200 mt-2">This field is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label
              className="text-white font-bold text-xl mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              type="number"
              placeholder="Add amount"
              className="rounded-md p-1 text-gray-600 outline-purple-700"
              id="amount"
              {...register("amount", { required: true })}
            />
            {errors.amount && (
              <span className="text-pink-200 mt-2">This field is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label
              className="text-white font-bold text-xl mb-2 "
              htmlFor="category"
            >
              Category
            </label>
            <select
              name="category"
              id="category"
              className="rounded-md p-2 text-gray-600 outline-purple-700"
              defaultValue={""}
              {...register("category", { required: true })}
            >
              <option value={""} disabled>
                --Select--
              </option>
              <option value="casa">House</option>
              <option value="ocio">Leisure</option>
              <option value="ahorro">Saving</option>
              <option value="comida">Food</option>
              <option value="gastos">Cost</option>
              <option value="salud">Health</option>
              <option value="suscripciones">Subscriptions</option>
            </select>
            {errors.category && (
              <span className="text-pink-200 mt-2">This field is required</span>
            )}
          </div>
          <input
            type="submit"
            value={expenseEdit.expense ? "Save Changes" : "Add"}
            className="bg-purple-800 rounded-md p-1 text-white font-bold hover:bg-purple-900 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

export default Modal;
