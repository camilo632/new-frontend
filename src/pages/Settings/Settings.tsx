import './Settings.scss'
import settings_svg from "../../assets/Settings/settings.svg"
import reboot_svg from "../../assets/Settings/reboot.svg"
import dev_svg from "../../assets/Settings/dev.svg"
import right_arrow_svg from "../../assets/Settings/right-arrow.svg"
import { useNavigate } from 'react-router-dom';
import { motion } from "motion/react"
// @ts-ignore
import { useSwipeable } from 'react-swipeable';

function Settings() {

  const navigate = useNavigate();

  const swipeHandlers = useSwipeable({
      onSwipedRight: () => {
        navigate('/notifications');
      },
      delta: 50,  
      trackMouse: true, 
    });

  return (
    <div 
    {...swipeHandlers}
    className='settings-container  flex justify-center items-center flex-col p-10 gap-5 bg-gray-300'>
      <div className='h-1/5 w-full bg-white rounded-3xl shadow-xl flex justify-center items-center'>
        <h1 className='font-bold text-5xl'>Paramètres</h1>
      </div>

      <div className='h-4/5 w-full bg-white rounded-3xl grid grid-rows-3 shadow-xl'>
        <div className='w-full border-b-3 border-gray-300 settings-div'>
          <div>
            <img src={settings_svg} className='h-22'/>
          </div>
          <div className='h-full w-full flex justify-start items-center'>
            <p className='text-3xl'>Mises à jour</p>
          </div>
          <div>
            <motion.p className='text-6xl text-amber-500 font-bold'
              whileTap={{ scale: 0.90}} 
              transition={{ type: "spring", stiffness: 500 }}
              
            >OS 18.0</motion.p>
          </div>
          <motion.button
              className='border-3 p-4 rounded-2xl text-xl'
              whileTap={{ scale: 0.85 }} 
              transition={{ type: "spring", stiffness: 200 }}
          >
            Mettre à jour
          </motion.button>
          
        </div>

        <div className='w-full border-b-3 border-gray-300 settings-div'>
          <div>
            <img src={reboot_svg} className='h-20'/>
          </div>
          <div className='h-full w-full flex justify-start items-center'>
            <p className='text-3xl w-full'>Redémarrer</p>
          </div>
          <div className=''>
          </div>
          <motion.button
              className='border-3 p-4 rounded-2xl text-xl'
              whileTap={{ scale: 0.85 }} 
              transition={{ type: "spring", stiffness: 200 }}
          >
            Redémarrer
          </motion.button>
        </div>

        <div className='w-full settings-div'>
          
          <div>
            <img src={dev_svg} className='h-25'/>
          </div>
          <div className='h-full w-full flex justify-start items-center'>
            <p className='text-3xl'>Options de développement</p>
          </div>

          <div className=''>
          </div>

          <div>
            <motion.img
              src={right_arrow_svg}
              className="h-25"
              whileTap={{ scale: 0.85 }} 
              transition={{ type: "spring", stiffness: 200 }}
            />
          </div>
        </div>        
      </div>
    </div>
  )
}

export default Settings
