import './Home.scss'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import Battery from '../../components/Battery/Battery';
// import happy_emoji from "../../assets/Emojis/gif-happy.gif";
// import angry_emoji from "../../assets/Emojis/gif-angry.gif";
import sad_emoji from "../../assets/Emojis/gif-sad.gif";
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

  const goToNotificationsPage = () => {
    navigate('/notifications');  
  };

  return (
    <div
    {...swipeHandlers}
    className='home p-2 bg-gradient-to-b from-gray-900 to-black'
    >
      <div className='grid grid-rows-2 gap-10'>
        <div><InfoDashboardBox name="Solaire" power={"---"} color="bg-gray-900"/></div>
        <div><InfoDashboardBox name="Entrée AC" power={"1850"} color="bg-gray-900"/></div>
      </div>
      <div className=' grid grid-rows-2 gap-10'>
        <div className='flex justify-start items-center '>
        </div>
        <div className='flex justify-center items-center overflow-hidden'>
          <span className='w-full h-1 bg-gray-700 flex flex-row justify-evenly items-center'>
            <motion.span className='w-full h-full flex justify-between items-center'
              animate={{x:["-110%","110%"]}}
              transition={{ repeat: Infinity, duration:2, ease:"easeInOut"}}
            >
              <span className='rounded-full w-2 h-2 bg-cyan-500'></span>
              <span className='rounded-full w-2 h-2 bg-cyan-500'></span>
            </motion.span>
          </span>
        </div>
      </div>
      <div className='column-2-home gap-10'>
        <motion.div className='flex justify-center items-start rounded-4xl bg-gray-900 border-5 border-orange-500 shadow-[0px_0px_10px_4px] shadow-orange-500 relative' onClick={goToNotificationsPage} whileTap={{scale:0.90}} transition={{type:"spring",duration:0.5}}>
          {/* <motion.img src={angry_emoji} alt="emoji" className={`${false ? "h-55" : "h-42 mt-6"}`}
          /> */}
          <motion.img src={sad_emoji} alt="emoji" className={`${true ? "h-55" : "h-45"}`}
          />
          <p className='absolute text-white bottom-0 text-4xl pb-2'>Batterie faible !</p>
        </motion.div>
        <div className=''>
          <Battery/>
        </div>
      </div>
      <div className=' grid grid-rows-2 gap-10'>
        <div className='flex justify-center items-center'>
          {/* <span className='w-full h-1 bg-gray-700 flex flex-row justify-evenly items-center'>
            <span className='rounded-full w-2 h-2 bg-cyan-500'></span>
            <span className='rounded-full w-2 h-2 bg-cyan-500'></span>
          </span> */}
        </div>
        <div className='flex justify-center items-center overflow-hidden'>
          <span className='w-full h-1 bg-gray-700 flex flex-row justify-evenly items-center'>
            <motion.span className='w-full h-full flex justify-between items-center'
              animate={{x:["-110%","110%"]}}
              transition={{ repeat: Infinity, duration:2, ease:"easeInOut"}}
            >
              <span className='rounded-full w-2 h-2 bg-cyan-500'></span>
              <span className='rounded-full w-2 h-2 bg-cyan-500'></span>
            </motion.span>
          </span>
        </div>
      </div>
      <div className=''>
        <InfoDashboardBox name="Sortie AC" power={"2550"} color="bg-gray-900"/>
      </div>
    </div>
  )
}

export default Home
