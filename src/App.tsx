import './App.scss'
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


const Home = lazy(() => import('./pages/Home/Home'));
const Notifications = lazy(() => import('./pages/Notifications/Notifications'));

function App() {

  return (
    <Router>
      <Suspense fallback={<div>Cargando...</div>}>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/notifications" element={<Notifications/>} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
