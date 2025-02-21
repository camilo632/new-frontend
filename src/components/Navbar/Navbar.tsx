import './Navbar.scss'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import alarm from "../../assets/Notifications/alarm.png";
import { motion } from "motion/react"
import moment from 'moment-timezone';
import wifi_4_bars from "../../assets/Wifi/wifi-4-bars.svg";
// import API from '../../hooks/API/API';

// API key and url to have access to the weather (Paris)
// const API_KEY = "ceed50612a02a7adff8f033c86edba0f"; 
// const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&units=metric&appid=${API_KEY}`;

// interface NavbarProps {
//   activeNotification: number; // This prop shows the little icon on the navbar whenever there's an active alarm/warning
// }

interface NotificationType {
  id: number;
  img: string;
  text: string;
  active: boolean;
}

interface NavbarProps {
  notifications: NotificationType[];
}

function Navbar({ notifications }: NavbarProps) {

    const [activeNotification, setActiveNotification] = useState<number>(0);
  

  // Swipe gesture to change page
  const navigate = useNavigate();
  const goToNotificationsPage = () => {
    navigate('/notifications');  
  };

  useEffect(() => {
    if (notifications.length > 0) {
      setActiveNotification(1);
    }
    else{
      setActiveNotification(0); 
    }
  }, [notifications]); 

  // Variables to save current time and temperature
  const [currentTime, setCurrentTime] = useState<string>("");
  // const [temperature, setTemperature] = useState<number | null>(null);

  // API call response state
  // const { data } = API(API_URL, 5000); // Using the custom API hook

  useEffect(() => {
    const updateClock = () => {
      const timeInParis = moment().tz("Europe/Paris").format('HH:mm');
      setCurrentTime(timeInParis);
    };

    updateClock(); 
    const intervalId = setInterval(updateClock, 60000); // Update each minute

    return () => clearInterval(intervalId); // Clear the interval when the component is unmounted
  }, []);

  // useEffect(() => {
  //   if (data) {
  //     console.log("API Data:", data); 
  //     if (data.main && data.main.temp) {
  //       setTemperature(data.main.temp.toFixed(2)); // Set the temperature if available in the response
  //       // console.log(data.main.temp.toFixed(2))
  //     }
  //   }
  // }, [data]); // This will trigger when the API data changes



  return (
    <div className='navbar w-full px-15 bg-gray-900'>
      <div className='flex justify-start items-center text-white'>
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
      </div>

      <div className='flex justify-center items-center gap-3'>
        <p className='text-5xl text-white'>{currentTime}</p> 
      </div>

      <div className='flex justify-evenly items-center'>
        <div>
          <span className='px-3 text-2xl text-white'>Paris</span>
          {true && <span className='px-3 text-2xl text-white'>23 °C</span>}
        </div>
        <div>
          <img src={wifi_4_bars} alt="wifi" className='h-9'/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
