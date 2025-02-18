import { useNavigate } from 'react-router-dom';
// @ts-ignore
import { useSwipeable } from 'react-swipeable';

function Profiles() {

    const navigate = useNavigate();

    const swipeHandlers = useSwipeable({
      onSwipedLeft: () => {
        navigate('/');
      }
    });

  return (
    <div 
    {...swipeHandlers}
    className='home'
    >
      Profiles
    </div>
  )
}

export default Profiles
