import React, { useState } from 'react';
import { FaRegHandPaper, FaRegHandScissors, FaRegHandRock, FaBook } from "react-icons/fa";
import { Outlet, Link,  useNavigate } from "react-router-dom";
import Modal from './Modal';
import { PedraEscolhida as PedraInicial } from './variants';
import Footer from './Footer';

type Choice = 'pedra' | 'papel' | 'tesoura';


let Pedrafoifoiescolhida = false
let score = 0;


const Play = () => {
    const [modalAberto, setModalAberto] = useState(false);
    const [PedraAberto, setPedraAberto] = useState(true)
    const [PedraEscolhida, setPedraEscolhida] = useState<boolean>(PedraInicial)
    

    const abrirModal = () => {
        setModalAberto(true);
    };

   

    const AbrirPedra = (pedra: boolean) => {
        setPedraAberto(true)
    }

    const Fecharpedra = (pedra: boolean) => {
        setPedraAberto(false)
    }
  
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
            Pedrafoifoiescolhida = true
        } else {
            Pedrafoifoiescolhida = false
        }

        
        
        navigate('/game', { state: { playerChoice, computerChoice, result: newResult } });
    };

    const PlayPedra = (PedraEscolhida: boolean) => {
        if (PedraEscolhida === false) {
            Pedrafoifoiescolhida = true
        } 
        playGame('pedra')
    }

    return (
        <div>

            

            <div className='flex justify-center items-center space-x-[100px] h-[35vh] '>

                <Modal isOpen={modalAberto} onClose={fecharModal}>
                        {/* Conteúdo do seu modal aqui */}
                        <h1 className='  text-center font-serif font-bold text-3xl'>Regras Pedra, Papel e Tesoura</h1>
                        <div className=' m-9 text-xl flex flex-col items-center justify-center '>
                            
                            <ol>
                                <li>1. Pedra quebra Tesoura.</li>
                                <li>2. Tesoura corta Papel.</li>
                                <li>3. Papel embrulha Pedra.</li>
                            </ol>
                        </div>
                        <div className='flex justify-center items-center'>
                         <p className=' mt-[40px] absolute bottom-0  font-bold text-xl'>É isso! O jogador que escolher o objeto que vence ganha a rodada.</p>
                         
                        </div> 
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
                {!Pedrafoifoiescolhida && (
                    <div 
                    className=' rounded-3xl bg-red-500 h-[75px] w-[75px] flex justify-center items-center hover:h-[90px] hover:w-[90px]'
                    onClick={() => playGame('pedra')}
                >
                    <FaRegHandRock/>
                </div>
                )}
                
            </div>
            <div>
                
                <div className='inline-block'
                    onClick={abrirModal}> 
                    <Footer/>
                </div>
            </div>
            
        </div>
    );
}

export default Play;
export { score };
