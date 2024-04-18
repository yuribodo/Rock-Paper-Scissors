import Header from './Header';
import { FaRegHandPaper } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Game = () => {
    // Using useLocation to access the data passed by the previous page
    const location = useLocation();
    const { playerChoice, computerChoice, result } = location.state;

    return (
        <div>
            <Header />
            <div className="flex flex-col md:flex-row justify-center items-center h-[55vh] space-x-4 md:space-x-8">
                <div className="flex flex-col items-center mb-4 md:mb-0">
                    <h1>Player 1</h1>
                    <div className="rounded-3xl bg-yellow-500 h-16 w-16 flex justify-center items-center">
                        <FaRegHandPaper />
                        {playerChoice}
                    </div>
                </div>

                <div className="flex flex-col items-center mb-4 md:mb-0">
                    <h1 className="text-center text-xl">{result}</h1>
                    <Link to="/">
                        <button className="bg-slate-500 rounded-lg h-12 md:h-14 w-32 text-center font-bold" type="button">
                            Jogar Novamente!
                        </button>
                    </Link>
                </div>

                <div className="flex flex-col items-center">
                    <h1>Player 2</h1>
                    <div className="rounded-3xl bg-yellow-500 h-16 w-16 flex justify-center items-center">
                        <FaRegHandPaper />
                        {computerChoice}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
