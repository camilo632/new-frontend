import { AnimatePresence } from 'framer-motion';
import './Notification.scss'
import { motion } from "motion/react"

interface NotificationProps {
  img: string; 
  text: string;
}

function Notification({img, text}: NotificationProps) {
  
  return (
    <AnimatePresence>
      <motion.div className='notification h-25 bg-indigo-950 rounded-2xl'
        whileTap={{ scale: 0.90 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{duration:0.2}}
      >
          <div className='flex justify-center items-center'>
              <img src={img} alt="Alarm-Warning"/>
          </div>
          <div className='flex justify-evenly items-start flex-col'>
              <p className='notification-name text-white text-3xl'>{text}</p>
              <p className='notification-device text-white text-xl'>Onduleur</p>
          </div>
          <div className='flex justify-end items-center flex-row gap-5 pr-5'>
              <p className='text-white text-xl'>Lundi</p>
              <p className='text-white text-xl'>13:30</p>
          </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Notification
