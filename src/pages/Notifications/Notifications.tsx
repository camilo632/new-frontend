import './Notifications.scss';
import Notification from '../../components/Notification/Notification';
import notification_bell_off from "../../assets/Notifications/notification-bell-off.svg";
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import { useSwipeable } from 'react-swipeable';

interface NotificationType {
  id: number;
  img: string;
  text: string;
}

interface NotificationsProps {
  notifications: NotificationType[];
}

function Notifications({ notifications }: NotificationsProps) {


  const navigate = useNavigate();

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      navigate('/settings');
    },
    onSwipedRight: () => {
      navigate('/');
    }
  });

  return (
    <div 
    {...swipeHandlers}
    className='notification-list-container flex flex-col justify-center items-center'>
        {notifications && notifications.length > 0 ? (
          <div className='notification-list w-full h-full py-15'>
            {notifications.map((notification) => (
              <Notification 
                key={notification.id} 
                img={notification.img} 
                text={notification.text} 
              />
            ))}
          </div>
        ) : (
        <div className='no-notifications flex justify-center items-center flex-col h-full'>
          <motion.div
            animate={{ x: ["0%", "7%","-7%","7%","-7%","0%"]}} 
            transition={{ duration: 1, ease:"easeInOut"}}
          >
            <img src={notification_bell_off}/>
          </motion.div>
            <div className='mt-5'>
              <p className='text-4xl text-gray-400'>Il n'y a pas de notifications.</p>
            </div>
          </div> 
        )}
      
    </div>
  );
}

export default Notifications;

