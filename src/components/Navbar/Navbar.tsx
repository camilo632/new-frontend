import './Navbar.scss'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import alarm from "../../assets/Notifications/alarm.png";
import { motion } from "motion/react"

interface NavbarProps {
  activeNotification: number;
}

function Navbar({ activeNotification }: NavbarProps) {

  const navigate = useNavigate();
  const goToNotificationsPage = () => {
    navigate('/notifications');  
  };

  const [time, setTime] = useState<string>(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    }, 60000); //Update each minute
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='navbar w-full px-5 bg-gray-900'>
      <div className='flex justify-start items-center text-white'>
        <span></span>
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-5xl text-white'>{time}</p> 
      </div>
      <div className='flex justify-end items-center'>
        {
          activeNotification === 1 ? (
            <motion.img 
              src={alarm} 
              onClick={goToNotificationsPage}
              className='h-10 px-3' 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{
                duration: 1,   
                repeat: Infinity, 
                repeatType: "loop" 
              }}
            />
          ) : null
        }
        <span className='px-3 text-2xl text-white'>Paris</span>
        <span className='px-3 text-2xl text-white'>25 C°</span>
      </div>
    </div>
  );
}

export default Navbar;
