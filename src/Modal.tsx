import React from 'react';
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded-3xl p-4 w-11/12 md:w-[50%] max-w-md h-[45vh]">
      <div className="flex justify-end">
        <button onClick={onClose}>
          <IoMdClose className="text-gray-700 text-3xl" />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Modal;
