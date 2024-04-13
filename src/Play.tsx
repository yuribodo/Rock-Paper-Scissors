import React, { useState } from 'react';
import { FaRegHandPaper, FaRegHandScissors, FaRegHandRock, FaBook } from "react-icons/fa";
import { Outlet, Link,  useNavigate } from "react-router-dom";
import Modal from './Modal';

type Choice = 'pedra' | 'papel' | 'tesoura';



let score = 0;

const Play = () => {
    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = () => {
      setModalAberto(true);
    };
  
    const fecharModal = () => {
      setModalAberto(false);
    };
    const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
    const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
    const [result, setResult] = useState<string | null>(null);
    const [pedraSelected, setPedraSelected] = useState<boolean>(false); // Estado para controlar se "pedra" foi selecionado

    const navigate = useNavigate();

    const choices: Choice[] = ['pedra', 'papel', 'tesoura'];

    const playGame = (playerChoice: Choice) => {
        // Verifica se "pedra" já foi selecionado
        if (playerChoice === 'pedra' && pedraSelected) {
            // Se "pedra" já foi selecionado, sair da função sem fazer nada
            return;
        }

        const computerChoice: Choice = choices[Math.floor(Math.random() * 3)];
        
        setPlayerChoice(playerChoice);
        setComputerChoice(computerChoice);
        const newResult = playerChoice === computerChoice ? 'Empate' :
        ((playerChoice === 'pedra' && computerChoice === 'tesoura') ||
        (playerChoice === 'papel' && computerChoice === 'pedra') ||
        (playerChoice === 'tesoura' && computerChoice === 'papel')) ? 'Você ganhou!' : 'Você perdeu!';

        setPlayerChoice(playerChoice);
        setComputerChoice(computerChoice);
        setResult(newResult);
        if (newResult === 'Você ganhou!') score++;

        // Se "pedra" foi escolhido, atualize o estado para indicar que já foi selecionado
        if (playerChoice === 'pedra') {
            setPedraSelected(true);
        }

        navigate('/game', { state: { playerChoice, computerChoice, result: newResult } });
    };

    return (
        <div>

            

            <div className='flex justify-center items-center space-x-[100px] h-[35vh] '>

                <Modal isOpen={modalAberto} onClose={fecharModal}>
                        {/* Conteúdo do seu modal aqui */}
                        <h2>Meu Modal</h2>
                        <p>Este é o conteúdo do meu modal.</p>
                </Modal>

                <div 
                    className=' rounded-3xl bg-yellow-500 h-[75px] w-[75px] flex justify-center items-center hover:h-[90px] hover:w-[90px]'
                    onClick={() => playGame('papel')}
                >
                    <FaRegHandPaper/>
                </div>
                <div 
                    className=' rounded-3xl bg-blue-500 h-[75px] w-[75px] flex justify-center items-center hover:h-[90px] hover:w-[90px]'
                    onClick={() => playGame('tesoura')}
                >
                    <FaRegHandScissors/>
                </div>
                <div 
                    className=' rounded-3xl bg-red-500 h-[75px] w-[75px] flex justify-center items-center hover:h-[90px] hover:w-[90px]'
                    onClick={() => playGame('pedra')}
                >
                    <FaRegHandRock/>
                </div>
            </div>
            <div>
                <div 
                    className=' rounded-3xl bg-purple-800 h-[75px] w-[75px] flex justify-center items-center hover:h-[90px] hover:w-[90px]'
                    onClick={abrirModal}
                >
                    <FaBook />
                </div>
                
            </div>
            
        </div>
    );
}

export default Play;
export { score };
