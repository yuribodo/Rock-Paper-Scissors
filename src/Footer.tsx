import { FaBook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div>
      
        <motion.div 
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          className=' rounded-3xl bg-purple-800 h-[75px] w-[75px] flex justify-center items-center '
                    
                >
                  
                    <FaBook />
                </motion.div>
                
    </div>
  )
}

export default Footer