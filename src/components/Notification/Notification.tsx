import { AnimatePresence } from 'framer-motion';
import './Notification.scss'
import * as motion from "motion/react-client"

interface NotificationProps {
  img: string; 
  text: string;
}

function Notification({img, text}: NotificationProps) {
  
  return (
    <AnimatePresence>
      <motion.div className='notification'
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
          <div>
              <img src={img} alt="Alarm-Warning"/>
          </div>
          <div>
              <p className='notification-name'>{text}</p>
              <p className='notification-device'>Onduleur</p>
          </div>
          <div>
              <p>13:30</p>
          </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Notification
