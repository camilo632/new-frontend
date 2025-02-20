import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import './Notification.scss';
import alarm from "../../assets/Notifications/alarm.png";

interface NotificationProps {
  img: string; 
  text: string;
  active:boolean;
}

function Notification({ img, text, active }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex justify-center items-center w-full">
      {isVisible ? (

        active ? (

          <motion.div
            
            className='notification h-25 bg-indigo-950 rounded-2xl'
            // whileTap={{ scale: 0.90 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, delay:0.1 }}
            
          >
              <>
              <div className='flex justify-center items-center'>

                {img === alarm ? (
                  <motion.img src={img} alt="Alarm-Warning"
                    className="h-20"
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{
                      duration: 1,   
                      repeat: Infinity, 
                      repeatType: "loop" 
                    }}
                  />
                  
                ):(
                  
                  <motion.img src={img} alt="Alarm-Warning"
                    className="h-25"
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{
                      duration: 1,   
                      repeat: Infinity, 
                      repeatType: "loop" 
                    }}
                  />
                ) 
                }
              </div>
              <div className='flex justify-evenly items-start flex-col'>
                <p className='notification-name text-white text-3xl font-bold'>{text}</p>
                <p className='notification-device text-white text-xl'>Onduleur</p>
              </div>
              <div className='flex justify-end items-center flex-row gap-5 pr-5'>
                <p className='text-white text-2xl'>Lundi</p>
                <p className='text-white text-2xl'>13:30</p>
              </div>
            </>
  
          </motion.div>
          
          
        ): 
          <motion.div
            
            className='notification h-25 bg-slate-950 rounded-2xl opacity-20'
            // whileTap={{ scale: 0.90 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, delay:0.1 }}
            
          >
              <>
              <div className='flex justify-center items-center'>
                {img === alarm ? (
                  <img src={img} alt="Alarm-Warning" className="opacity-30 h-20"/>
                ):(
                  <img src={img} alt="Alarm-Warning" className="opacity-30 h-25"/>
                )}
              </div>
              <div className='flex justify-evenly items-start flex-col opacity-50'>
                <p className='notification-name text-gray-500 text-3xl font-bold'>{text}</p>
                <p className='notification-device text-gray-500 text-xl'>Onduleur</p>
              </div>
              <div className='flex justify-end items-center flex-row gap-5 pr-5 opacity-50'>
                <p className='text-gray-500 text-2xl'>Lundi</p>
                <p className='text-gray-500 text-2xl'>13:30</p>
              </div>
            </>
  
          </motion.div>
      )
      :
      (
        <div className="h-25 w-full bg-white"></div>
      )
    }
    </div>
  );
}

export default Notification;
