import React from "react";
import ImgClose from "../assets/icons/close.png";
import { useForm } from "react-hook-form";

function Modal({ handleClose, modal }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div
      className={`absolute bg-slate-600 w-full h-screen top-0 mx-auto transition-all translate-x-full duration-300  ${
        modal && "translate-x-0"
      }`}
    >
      <div className="fixed w-8 cursor-pointer right-5 top-5">
        <img src={ImgClose} alt="icon-close" onClick={handleClose} />
      </div>
      <div className="flex place-items-center p-10 flex-col max-w-md mx-auto">
        <h3 className="text-2xl text-white uppercase mb-10 mt-10 font-bold">
          New Expense
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
              type="number"
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
              <option value="Car">Car</option>
              <option value="Shopping">Shopping</option>
            </select>
            {errors.category && (
              <span className="text-pink-200 mt-2">This field is required</span>
            )}
          </div>
          <input
            type="submit"
            value="Add"
            className="bg-purple-800 rounded-md p-1 text-white font-bold hover:bg-purple-900 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

export default Modal;