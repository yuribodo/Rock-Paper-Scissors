import {useState} from 'react'
import { FaBook } from 'react-icons/fa';

const Footer = () => {
    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = () => {
        setModalAberto(true);
        console.log(modalAberto)
    };

  return (



    <div>
        <div className=' rounded-3xl bg-purple-800 h-[75px] w-[75px] flex justify-center items-center hover:h-[90px] hover:w-[90px]'
                    onClick={abrirModal}
                >
                    <FaBook />
                </div>
                
    </div>
  )
}

export default Footer