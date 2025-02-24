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
    onSwipedRight: () => {
      navigate('/notifications');
    },
    onSwipedLeft: () => {
      navigate('/profiles');
    },
    // onSwipedUp: () => {
    //   navigate('/settings'); // O cualquier ruta que desees
    // },
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
      {/* -----------------------------------Column 1 Home------------------------------------------- */}
      <div className='column-1-home grid grid-rows-2 '>
        <div><InfoDashboardBox name="Entrée AC" power={1850} color="bg-gray-900" disable={false}/></div>
        <div></div>
        <div><InfoDashboardBox name="Solaire" power={1467} color="bg-gray-900" disable={false}/></div>
      </div>
      {/* -------------------------------------------------------------------------------------------- */}
      <div className=' grid grid-rows-2 gap-10'>
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
        <div className='flex justify-center items-center overflow-hidden'>
          <span className='w-full h-1 bg-gray-700 flex flex-row justify-evenly items-center'>
            <motion.span className='w-full h-full flex justify-between items-center'
              animate={{x:["-110%","110%"]}}
              transition={{ repeat: Infinity, duration:2, ease:"easeInOut", delay:0.2}}
            >
              <span className='rounded-full w-2 h-2 bg-cyan-500'></span>
              <span className='rounded-full w-2 h-2 bg-cyan-500'></span>
            </motion.span>
          </span>
        </div>
      </div>
      {/* -----------------------------------Column 2 Home------------------------------------------- */}
      <div className='column-2-home relative '>
        <motion.div className='flex justify-center items-start rounded-4xl bg-gray-900 border-5 border-orange-500 shadow-[0px_0px_10px_4px] shadow-orange-500 relative' onClick={goToNotificationsPage} whileTap={{scale:0.90}} transition={{type:"spring",duration:0.5}}>
          {/* <motion.img src={angry_emoji} alt="emoji" className={`${false ? "h-55" : "h-42 mt-6"}`}
          /> */}
          <motion.img src={sad_emoji} alt="emoji" className={`${true ? "h-55" : "h-45"}`}
          />
          <p className='absolute text-white bottom-0 text-4xl pb-2'>Oops !</p>
        </motion.div>
        <div className='flex justify-center items-center overflow-hidden'>
          <span className='w-1 h-full bg-gray-700 flex flex-col justify-evenly items-center'>
            <motion.span className='w-full h-full flex flex-col justify-between items-center'
              animate={{y:["110%","-110%"]}}
              transition={{ repeat: Infinity, duration:2, ease:"easeInOut", delay:0.3}}
            >
              <span className='rounded-full w-2 h-2 bg-cyan-500'></span>
              <span className='rounded-full w-2 h-2 bg-cyan-500'></span>
            </motion.span>
          </span>
        </div>
        <div className=''>
          <Battery/>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------- */}
      <div className=' grid grid-rows-2 gap-10'>
        <div className='flex justify-center items-center overflow-hidden'>
          <span className='w-full h-1 bg-gray-700 flex flex-row justify-evenly items-center'>
            <motion.span className='w-full h-full flex justify-between items-center'
              animate={{x:["-110%","110%"]}}
              transition={{ repeat: Infinity, duration:2, ease:"easeInOut", delay: 0.2}}
            >
              <span className='rounded-full w-2 h-2 bg-cyan-500'></span>
              <span className='rounded-full w-2 h-2 bg-cyan-500'></span>
            </motion.span>
          </span>
        </div>
        <div className='flex justify-center items-center overflow-hidden'>
        </div>
      </div>
      {/* -----------------------------------Column 3 Home------------------------------------------- */}
      <div className='column-3-home '>
        <InfoDashboardBox name="Sortie AC" power={2550} color="bg-gray-900" disable={false}/>
      </div>
      {/* -------------------------------------------------------------------------------------------- */}
    </div>
  )
}

export default Home
