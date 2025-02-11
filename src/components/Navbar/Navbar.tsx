import './Navbar.scss'
import { useState, useEffect } from 'react';

function Navbar() {
  
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    }, 60000); // Actualiza cada minuto

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='navbar'>
      <div>
        <span>MENU</span>
      </div>
      <div>
        <p>{time}</p> 
      </div>
      <div>
        <span>WIFI</span>
        <span>METEO</span>
      </div>
    </div>
  );
}

export default Navbar;
