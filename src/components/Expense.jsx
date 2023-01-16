import IconAhorro from '../assets/icons/icono_gastos.svg'
import IconCasa from '../assets/icons/icono_casa.svg'
import IconOcio from '../assets/icons/icono_ocio.svg'
import IconSalud from '../assets/icons/icono_salud.svg'
import IconSuscripciones from '../assets/icons/icono_suscripciones.svg'
import IconGastos from '../assets/icons/icono_gastos.svg'

function Expense() {
  return (
    <div className="w-full max-w-xl flex m-auto gap-5 bg-white p-4 rounded-lg shadow-2xl  h-40 items-center justify-between">
      <div className='w-28 min-w-28'>
        <img src={IconCasa} alt="icon-ahorro"/>
      </div>
      <div className='text-left w-full'>
        <p className='text-slate-600 font-bold'>Comida</p>
        <p className='text-slate-800'>Comida</p>
        <p className='text-slate-800'><span className='text-slate-800 font-bold'>Date</span> : 29/12/22</p>
      </div>
      <div>
        <h6 className='font-bold text-lg text-slate-800'>$500</h6>
      </div>
    </div>
  )
}

export default Expense;
