import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute h-[55vh] bg-slate-700 modal-overlay w-[50%] rounded-3xl " onClick={onClose}>
      <div className="">
        <button onClick={onClose} className="">
          Fechar
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
