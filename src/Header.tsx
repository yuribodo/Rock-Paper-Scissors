
import { score } from './Play'


const Header = () => {
  

  return (
    <div className='bg-gray-500 h-32  flex justify-between items-center m-10 rounded-lg'>
        <div  className='m-10 text-2xl'>
            <p>Pedra</p>
            <p>Papel</p>
            <p>Tesoura</p>
        </div>

        <div className=' bg-slate-400 w-[140px] h-[100px] m-10 rounded-lg '>
            <p className='text-center'>Score</p>
            <p className='text-center mt-[15px] text-2xl'>{score}</p>
        </div>
    </div>

  )
}

export default Header