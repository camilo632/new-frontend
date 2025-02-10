import './Notifications.scss'
import Notification from '../../components/Notification/Notification'
import alarm from "../../assets/Alarms-Warnings/alarm.png";
import warning from "../../assets/Alarms-Warnings/warning.png";

function Notifications() {

  return (
    <div className='notification-list'>
        <Notification img={alarm} text='Alarm 1'/>
        <Notification img={alarm} text='Alarm 2'/>
        <Notification img={alarm} text='Alarm 3'/>
        <Notification img={warning} text='Warning 1'/>
        <Notification img={warning} text='Warning 2'/>
        <Notification img={warning} text='Warning 3'/>

    </div>
  )
}

export default Notifications
