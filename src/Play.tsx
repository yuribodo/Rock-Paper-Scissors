import React, { useState } from 'react'
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandRock } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { Outlet, Link } from "react-router-dom";
import Modal from './Modal';

type Choice = 'pedra' | 'papel' | 'tesoura';

const ShowModal = () => {
    return (
        <Modal/>
    )
}



const Play = () => {

    const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
    const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
    const [result, setResult] = useState<string | null>(null);


    const choices: Choice[] = ['pedra', 'papel', 'tesoura'];



    const playGame = (playerChoice: Choice) => {
        const computerChoice: Choice = choices[Math.floor(Math.random() * 3)];
    
        setPlayerChoice(playerChoice);
        setComputerChoice(computerChoice);
    
        if (playerChoice === computerChoice) {
          setResult('Empate');
        } else if (
          (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
          (playerChoice === 'papel' && computerChoice === 'pedra') ||
          (playerChoice === 'tesoura' && computerChoice === 'papel')
        ) {
          setResult('Você ganhou!');
        } else {
          setResult('Você perdeu!');
        }
      };

    

  return (
    <div>
        <div className='flex justify-center items-center space-x-[100px] h-[35vh] '>
            
            <Link to="/game">
                <div 
                    className=' rounded-3xl bg-yellow-500 h-[75px] w-[75px] flex justify-center items-center hover:h-[90px] hover:w-[90px]'
                    onClick={() => playGame('papel')}
                >
                    <FaRegHandPaper/>
                    
                </div>
            </Link>
            <Link to="/game">
                <div 
                    className=' rounded-3xl bg-blue-500 h-[75px] w-[75px] flex justify-center items-center hover:h-[90px] hover:w-[90px]'
                    onClick={() => playGame('tesoura')}
                >
                    <FaRegHandScissors/>
                </div>
            </Link>

            {/*Precisa arrumar a lógica ( o codigo funciona mas preciso enviar as informações para a próxima pagina)*/}
            <Link to="/game">
                <div 
                    className=' rounded-3xl bg-red-500 h-[75px] w-[75px] flex justify-center items-center hover:h-[90px] hover:w-[90px]'
                    onClick={() => playGame('pedra')}
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

        {result && (
        <div>
          <p>Você escolheu: {playerChoice}</p>
          <p>O computador escolheu: {computerChoice}</p>
          <p>Resultado: {result}</p>
        </div>
      )}
    </div>
    

    
  )
}

export default Play