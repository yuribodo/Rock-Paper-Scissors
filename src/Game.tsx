import React from 'react'
import Header from './Header'
import { FaRegHandPaper } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Game = () => {
  return (
    <div>
        <Header/>
        <div className='flex justify-center items-center h-[55vh] space-x-[200px]'>
            <div>
                <h1>
                    Player 1
                </h1>
                
                <div className=' rounded-3xl bg-yellow-500 h-[75px] w-[75px] flex justify-center items-center '>
                    <FaRegHandPaper/>
                    
                </div>
                
            </div>

            <div className='flex-col'>
                <h1 className=' text-center'>
                    Você Perdeu
                </h1>

                    <Link to='/'>
                        <button className=' bg-slate-500 rounded-lg h-[50px] w-[110px] text-center' type="button">Jogar Novamente!</button>
                    </Link>
                    
            </div>

            <div>
                <h1>Player 2</h1>

                <div className=' rounded-3xl bg-yellow-500 h-[75px] w-[75px] flex justify-center items-center'>
                    <FaRegHandPaper/>
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Game