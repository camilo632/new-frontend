import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

function Profiles() {

    const navigate = useNavigate();

    const swipeHandlers = useSwipeable({
      onSwipedLeft: () => {
        navigate('/');
      },
      delta: 50,  
      trackMouse: true, 
    });

  return (
    <div 
    {...swipeHandlers}
    className='home bg-gradient-to-b from-gray-900 to-black'
    >
      Profiles
    </div>
  )
}

export default Profiles
