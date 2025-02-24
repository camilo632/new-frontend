import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

function Profiles() {

    const navigate = useNavigate();

    const swipeHandlers = useSwipeable({
      onSwipedRight: () => {
        navigate('/');
      },
      onSwipedLeft: () => {
        navigate('/settings');
      },
      delta: 50,  
      trackMouse: true, 
    });

  return (
    <div 
    {...swipeHandlers}
    className='home bg-gradient-to-b from-gray-900 to-black h-full w-full text-white flex justify-center items-center bg-amber-300'
    >
      Profiles
    </div>
  )
}

export default Profiles
