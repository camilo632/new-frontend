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
  active: boolean;
}

const originalNotifications: NotificationType[] = [
  { id: 1, img: alarm, text: "Alarm 1", active: true },
  { id: 2, img: alarm, text: "Alarm 2", active: true },
  { id: 4, img: warning, text: "Warning 1", active: true },
  { id: 15, img: warning, text: "Warning 7", active: false },
  { id: 16, img: warning, text: "Warning 8", active: false },
  { id: 5, img: warning, text: "Warning 2", active: false },
  { id: 6, img: warning, text: "Warning 3", active: false },
  { id: 7, img: warning, text: "Warning 4", active: false },
  { id: 8, img: warning, text: "Warning 5", active: false },
  // { id: 9, img: warning, text: "Warning 6", active: false },
  // { id: 10, img: alarm, text: "Alarm 4", active: false },
  // { id: 11, img: alarm, text: "Alarm 5", active: false },
  // { id: 12, img: alarm, text: "Alarm 6", active: false },
  // { id: 13, img: alarm, text: "Alarm 7", active: false },
  // { id: 14, img: alarm, text: "Alarm 8", active: false },
];

function App() {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [adding, setAdding] = useState(true);
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setNotifications((prev) => {
  //       if (adding) {
  //         if (prev.length < originalNotifications.length) {
  //           return [...prev, originalNotifications[prev.length]];
  //         } else {
  //           setAdding(false);
  //           return prev;
  //         }
  //       } else {
  //         if (prev.length > 0) {
  //           return prev.slice(1); // Eliminar la primera notificación
  //         } else {
  //           setAdding(true);
  //           return prev;
  //         }
  //       }
  //     });
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [adding]);


  return (
    <Router>
      <Suspense fallback={<div>Cargando...</div>}>
      <Navbar notifications={originalNotifications} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/notifications" element={<Notifications notifications={originalNotifications}/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/profiles" element={<Profiles/>} />
        </Routes>
      <NavbarBottom/>
      </Suspense>
    </Router>
  )
}

export default App
