import React, { useState } from 'react'
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandRock } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { Outlet, Link } from "react-router-dom";
import Modal from './Modal';

const ShowModal = () => {
    return (
        <Modal/>
    )
}

const Play = () => {

    const valores = ['paper', 'scissor', 'rock']

    const [player1, setPlayer1] = useState("")
    const [player2, setPlayer2] = useState("")



    const MudarPlayer2 = () => {
        const randomIndex = Math.floor(Math.random()*valores.length)
        
    }
    

    

  return (
    <div>
        <div className='flex justify-center items-center space-x-[100px] h-[35vh] '>
            <Link to="/game">
                <div 
                    className=' rounded-3xl bg-yellow-500 h-[75px] w-[75px] flex justify-center items-center hover:h-[90px] hover:w-[90px]'
                    onClick={() => setPlayer1(valores[0])}
                >
                    <FaRegHandPaper/>
                    
                </div>
            </Link>
            <Link to="/game">
                <div 
                    className=' rounded-3xl bg-blue-500 h-[75px] w-[75px] flex justify-center items-center hover:h-[90px] hover:w-[90px]'
                    onClick={() => setPlayer1(valores[1])}
                >
                    <FaRegHandScissors/>
                </div>
            </Link>
            <Link to="/game">
                <div 
                    className=' rounded-3xl bg-red-500 h-[75px] w-[75px] flex justify-center items-center hover:h-[90px] hover:w-[90px]'
                    onClick={() => setPlayer1(valores[2])}
                >
                    <FaRegHandRock/>
                </div>
            </Link>
        </div>

        <div>
            <div 
                className=' rounded-3xl bg-purple-800 h-[75px] w-[75px] flex justify-center items-center hover:h-[90px] hover:w-[90px]'
                onClick={ShowModal}
                >
                    <FaBook />
        
            </div>
        </div>

        <p>{player2}</p>
    </div>
    

    
  )
}

export default Play