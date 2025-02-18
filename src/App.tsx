import './App.scss'
import './index.css'
import { useState, useEffect} from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import NavbarBottom from './components/NavbarBottom/NavbarBottom';
import alarm from "./assets/Notifications/alarm.png";
import warning from "./assets/Notifications/warning.png";
// import Notifications from './pages/Notifications/Notifications';


const Home = lazy(() => import('./pages/Home/Home'));
const Notifications = lazy(() => import('./pages/Notifications/Notifications'));
const Settings = lazy(() => import('./pages/Settings/Settings'));
const Profiles = lazy(() => import('./pages/Profiles/Profiles'));

interface NotificationType {
  id: number;
  img: string;
  text: string;
}

const originalNotifications: NotificationType[] = [
  { id: 1, img: alarm, text: "Alarm 1" },
  { id: 2, img: alarm, text: "Alarm 2" },
  { id: 3, img: alarm, text: "Alarm 3" },
  { id: 4, img: warning, text: "Warning 1" },
  { id: 5, img: warning, text: "Warning 2" },
];

function App() {
  const [activeNotification, setActiveNotification] = useState<number>(0);
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [adding, setAdding] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications((prev) => {
        if (adding) {
          if (prev.length < originalNotifications.length) {
            return [...prev, originalNotifications[prev.length]];
          } else {
            setAdding(false);
            return prev;
          }
        } else {
          if (prev.length > 0) {
            return prev.slice(1); // Eliminar la primera notificación
          } else {
            setAdding(true);
            return prev;
          }
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [adding]);

   useEffect(() => {
    if (notifications.length > 0) {
      setActiveNotification(1);
    }
    else{
      setActiveNotification(0); 
    }
  }, [notifications]); 

  return (
    <Router>
      <Suspense fallback={<div>Cargando...</div>}>
      <Navbar activeNotification={activeNotification} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/notifications" element={<Notifications notifications={notifications}/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/profiles" element={<Profiles/>} />
        </Routes>
      <NavbarBottom/>
      </Suspense>
    </Router>
  )
}

export default App
