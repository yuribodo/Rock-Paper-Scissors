import Header from './Header';
import { FaRegHandPaper, FaRegHandScissors, FaRegHandRock, } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'

const Game = () => {


    let papel1 = false
    let pedra1 = false
    let tesoura1 = false

    let papel2 = false
    let pedra2 = false
    let tesoura2 = false

    

    // Using useLocation to access the data passed by the previous page
    const location = useLocation();
    const { playerChoice, computerChoice, result } = location.state;

    if (playerChoice === 'papel') {
        papel1 = true
    } if (playerChoice === 'pedra') {
        pedra1 = true
    } if (playerChoice === 'tesoura') {
        tesoura1 = true
    }


    if (computerChoice === 'papel') {
        papel2 = true
    } if (computerChoice === 'pedra') {
        pedra2 = true
    } if (computerChoice === 'tesoura') {
        tesoura2 = true
    }


    return (
        <div>
            <Header />
            <div className="flex flex-col md:flex-row justify-center items-center h-[55vh] space-x-4 md:space-x-8">
                <div className="flex flex-col items-center mb-4 md:mb-0">
                    <h1>Player 1</h1>
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20 }}
                        className="rounded-3xl bg-yellow-500 h-20 w-20 flex justify-center items-center font-bold"
                    >
                        
                        {papel1 && (
                            <FaRegHandPaper/>
                        )}
                        {pedra1 && (
                            <FaRegHandRock/>
                        )}
                        {tesoura1 && (
                            <FaRegHandScissors/>
                        )}
                        {playerChoice}
                    </motion.div>
                </div>

                <div className="flex flex-col items-center mb-4 md:mb-0">
                    <h1 className="text-center text-xl">{result}</h1>
                    <motion.div
                        whileHover={{ scale: 1.4 }} // Make the button slightly larger on hover
                        animate={{

                          y2: 0,
                          scale: [1, 1.2, 1], // Grow larger and return to normal size
                        }}
                        
                        
                    >
                        <Link to="/Rock-Paper-Scissors/">
                            <button className="bg-slate-500 rounded-lg h-12 md:h-14 w-32 text-center font-bold" type="button">
                                Jogar Novamente!
                            </button>
                        </Link>
                    </motion.div>
                    
                </div>

                <div className="flex flex-col items-center">
                    <h1>Player 2</h1>
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20 }}
                        className="rounded-3xl bg-yellow-500 h-20 w-20 flex justify-center items-center font-bold">
                        {papel2 && (
                            <FaRegHandPaper/>
                        )}
                        {pedra2 && (
                            <FaRegHandRock/>
                        )}
                        {tesoura2 && (
                            <FaRegHandScissors/>
                        )}
                        {computerChoice}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Game;
