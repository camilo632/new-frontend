import './Home.scss'
// import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import Battery from '../../components/Battery/Battery';
import happy_emoji from "../../assets/Emojis/gif-happy.gif";
import InfoDashboardBox from '../../components/InfoDarshboardBox/InfoDashboardBox';

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
    className='home p-2 bg-gradient-to-b from-gray-900 to-black'
    >
      <div className='grid grid-rows-2 gap-10'>
        <div><InfoDashboardBox name="Entrée AC" power={1850} color="bg-gray-900"/></div>
        <div><InfoDashboardBox name="Solaire" power={2850} color="bg-gray-900"/></div>
      </div>
      <div className=' grid grid-rows-2 gap-10'>
        <div className='flex justify-center items-center'>
          <span className='w-full h-1 bg-gray-700 flex flex-row justify-evenly items-center'>
            <span className='rounded-full w-2 h-2 bg-yellow-400'></span>
            <span className='rounded-full w-2 h-2 bg-yellow-400'></span>
          </span>
        </div>
        <div></div>
      </div>
      <div className='column-2-home'>
        <div className='flex justify-center items center rounded-4xl bg-gray-900 border-5 border-gray-700 shadow-[0px_0px_10px_4px] shadow-indigo-950'>
          <img src={happy_emoji} alt="emoji" className='h-54'/>
        </div>
        <div className=' flex justify-center items-center'>
          <span className='w-1 h-full bg-gray-700 flex flex-col justify-evenly items-center'>
            <span className='rounded-full w-2 h-2 bg-yellow-400'></span>
            <span className='rounded-full w-2 h-2 bg-yellow-400'></span>
            <span className='rounded-full w-2 h-2 bg-yellow-400'></span>
          </span>
        </div>
        <div className=''>
          <Battery/>
        </div>
      </div>
      <div className=' grid grid-rows-2 gap-10'>
        <div className='flex justify-center items-center'>
          <span className='w-full h-1 bg-gray-700 flex flex-row justify-evenly items-center'>
            <span className='rounded-full w-2 h-2 bg-yellow-400'></span>
            <span className='rounded-full w-2 h-2 bg-yellow-400'></span>
          </span>
        </div>
        <div></div>
      </div>
      <div className=''>
        <InfoDashboardBox name="Sortie AC" power={2550} color="bg-gray-900"/>
      </div>
    </div>
  )
}

export default Home
