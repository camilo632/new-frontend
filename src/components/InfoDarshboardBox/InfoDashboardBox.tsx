import "./InfoDashboardBox.scss";

interface NotificationProps {
    name: string; 
    power: number;
    color: string;
  }
  
  function InfoDashboardBox({ name, power, color }: NotificationProps) {
    return (
      <div className={`info-dashboard-box h-full w-full rounded-xl grid grid-rows-2 p-3 ${color} border-gray-700 border-5 shadow-[0px_0px_10px_4px] shadow-indigo-950 `}>
        <div>
          <p className='text-3xl font-bold pb-2'>{name}</p>
          <p className='text-5xl font-bold'>{power} W</p>
        </div>
        <div className='flex flex-cols justify-between items-end'>
          {name !== "Solaire" &&
          <>
            <div>
              <p className="text-2xl">L1:</p>
              <p className="text-2xl">L2:</p>
              <p className="text-2xl">L3:</p>
            </div>
            <div>
              <p className="text-2xl font-bold">1447 W</p>
              <p className="text-2xl font-bold">378 W</p>
              <p className="text-2xl font-bold">555 W</p>
            </div>
          </>
          }
        </div>
      </div>
    )
  }
  
  export default InfoDashboardBox;
  