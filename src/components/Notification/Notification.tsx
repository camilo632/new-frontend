import './Notification.scss'


interface NotificationProps {
  img: string; 
  text: string;
}

function Notification({img, text}: NotificationProps) {

  return (
    <div className='notification'>
        <div>
            <img src={img} alt="Alarm-Warning"/>
        </div>
        <div>
            <p className='notification-name'>{text}</p>
            <p className='notification-device'>Onduleur</p>
        </div>
        <div>
            <p>13:30</p>
        </div>
    </div>
  )
}

export default Notification
