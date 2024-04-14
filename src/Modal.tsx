import React from 'react';
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute h-[55vh] bg-gray-200 modal-overlay w-[50%] rounded-3xl ">
      <div className="">
        <button onClick={onClose} className="">
          <IoMdClose className=' size-10'/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
