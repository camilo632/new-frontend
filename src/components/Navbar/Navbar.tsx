import './Navbar.scss'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import alarm from "../../assets/Notifications/alarm.png";
import { motion } from "motion/react"
import wifi_4_bars from "../../assets/Wifi/wifi-4-bars.svg";



const API_KEY = "ceed50612a02a7adff8f033c86edba0f"; // Reemplázala con tu clave
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&units=metric&appid=${API_KEY}`;

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

  const [temperature, setTemperature] = useState<number | null>(null);
  const [weatherIcon, setWeatherIcon] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setTemperature(data.main.temp.toFixed(1));
        // setWeatherIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
      } catch (err) {
        setTemperature(null);
        setWeatherIcon(null);
      } 
    };

    fetchWeather();
  }, []);

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
        <p className='text-5xl text-white'>{time}</p> 
      </div>

      <div className='flex justify-evenly items-center'>
        <div>
          <span className='px-3 text-2xl text-white'>Paris</span>
          {temperature && <span className='px-3 text-2xl text-white'>{temperature} °C</span>}
          {/* {weatherIcon && <img src={weatherIcon} alt="Weather" className="h-11 right-0 bg-gray-400 rounded-full" />} */}
        </div>
        <div>
          <img src={wifi_4_bars} alt="wifi" className='h-9'/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
