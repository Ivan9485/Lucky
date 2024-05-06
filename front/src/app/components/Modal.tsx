import { ProductInterface } from "../utils/inventory.interface"

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({open, onClose, children}: ModalProps) => {
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>Modal</div>
  )
}
export default Modal