import { ProductInterface } from "../utils/inventory.interface"

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({open, onClose, children}: ModalProps) => {
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
      
    {/* Modal */}
    <div 
    onClick={(e)=> e.stopPropagation()} 
    className={`bg-white rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100 w-11/12 sm:w-44" : "scale-125 opacity-0"}`}>

      <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg bg-white ">
        cerrar
      </button>
    {children}
    </div>

    </div>
  )
}
export default Modal