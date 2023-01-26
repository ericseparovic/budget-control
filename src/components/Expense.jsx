import IconAhorro from "../assets/icons/icono_gastos.svg";
import IconCasa from "../assets/icons/icono_casa.svg";
import IconOcio from "../assets/icons/icono_ocio.svg";
import IconSalud from "../assets/icons/icono_salud.svg";
import IconSuscripciones from "../assets/icons/icono_suscripciones.svg";
import IconGastos from "../assets/icons/icono_gastos.svg";
import IconComida from "../assets/icons/icono_comida.svg";
import IconRemove from "../assets/icons/remove.png";
import IconEdit from "../assets/icons/editar.png";

const iconsExpenses = {
  ahorro: IconAhorro,
  casa: IconCasa,
  ocio: IconOcio,
  salud: IconSalud,
  suscripciones: IconSuscripciones,
  gastos: IconGastos,
  comida: IconComida,
};

function Expense({ data, setExpenseEdit, setModal, removeExpense }) {
  const { amount, category, expense, id, date } = data;

  //Edit expense
  function handleEdit() {
    //Open modal
    setModal(true);
    setExpenseEdit(data);
  }

  return (
    <div className="max-w-sm w-full  flex m-auto gap-5 bg-white  rounded-lg shadow-2xl  h-28 items-center justify-between p-4">
      <div className="w-1/5">
        <img src={iconsExpenses[`${category}`]} alt="icon-ahorro" />
      </div>
      <div className="w-3/5 flex items-center text-left justify-between">
        <div>
          <p className="text-slate-600 font-bold">{category}</p>
          <p className="text-slate-800">{expense}</p>
          <p className="text-slate-800 text-xs">
            {date.toLocaleDateString("en-US")}
          </p>
        </div>
        <div>
          <h6 className="font-bold text-lg text-slate-800">${amount}</h6>
        </div>
      </div>
      <div className="flex gap-2 justify-center w-2/5 h-full items-center text-center  rounded-r-lg  text-white p-4 font-bold">
        <div className="w-6 cursor-pointer">
          <img src={IconEdit} alt="icon-edit" onClick={handleEdit} />
        </div>
        <div className="w-6 cursor-pointer">
          <img
            src={IconRemove}
            alt="icon-remove"
            onClick={() => removeExpense(id)}
          />
        </div>
      </div>
    </div>
  );
}

export default Expense;
