import './Home.scss'
// import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import { useSwipeable } from 'react-swipeable';

function Home() {

  const navigate = useNavigate();

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      navigate('/notifications');
    },
    onSwipedRight: () => {
      navigate('/profiles');
    },
    delta: 50,  
    trackMouse: true, 
  });

  return (
    <div
    {...swipeHandlers}
    className='home'
    >
      HOME
    </div>
  )
}

export default Home
