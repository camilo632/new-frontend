import './Notifications.scss';
import Notification from '../../components/Notification/Notification';
import alarm from "../../assets/Notifications/alarm.png";
import warning from "../../assets/Notifications/warning.png";
import notification_bell_off from "../../assets/Notifications/notification-bell-off.svg";
import * as motion from "motion/react-client"

interface NotificationType {
  id: number;
  img: string;
  text: string;
}

function Notifications() {

  const notifications: NotificationType[] = [
    { id: 1, img: alarm, text: 'Alarm 1' },
    { id: 2, img: warning, text: 'Warning 1' },
    // { id: 3, img: warning, text: 'Warning 2' }
  ];

  return (
    <div className='notification-list'>
      {notifications && notifications.length > 0 ? (
        notifications.map((notification) => (
          <Notification 
            key={notification.id} 
            img={notification.img} 
            text={notification.text} 
          />
        ))
      ) : (
        <div className='no-notifications'>
        <motion.div
          animate={{ x: ["0%", "7%","-7%","7%","0%"]}} 
          transition={{ duration: 1, ease:"easeInOut"}}
        >
          <img src={notification_bell_off}/>
        </motion.div>
          {/* <div>
            <img src={notification_bell_off}/>
          </div> */}
          <div>
            <p>IIl n'y a pas de notifications.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notifications;
