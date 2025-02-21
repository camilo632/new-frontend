import "./InfoDashboardBox.scss";

interface NotificationProps {
  name: string;
  power: string;
  color: string;
}

function InfoDashboardBox({ name, power, color }: NotificationProps) {
  const isInactive = power === "---";
  const textColor = isInactive ? "text-cyan-400 opacity-40" : "text-cyan-400";

  return (
    <div
      className={`info-dashboard-box h-full w-full rounded-xl grid grid-rows-2 p-3 ${color} border-gray-700 border-5 shadow-[0px_0px_10px_4px] shadow-indigo-950`}
    >
      <div className="flex-grow">
        <p className={`text-3xl font-bold pb-2 ${textColor}`}>{name}</p>
        <p className={`text-5xl font-bold ${textColor}`}>{power} W</p>
      </div>

      <div className="flex flex-col justify-end items-end">
        {name !== "Solaire" && (
          <div className="flex justify-between w-full">
            <div>
              <p className={`text-2xl ${textColor}`}>L1:</p>
              <p className={`text-2xl ${textColor}`}>L2:</p>
              <p className={`text-2xl ${textColor}`}>L3:</p>
            </div>
            <div className="flex flex-col items-end">
              <p className={`text-2xl font-bold ${textColor}`}>1447 W</p>
              <p className={`text-2xl font-bold ${textColor}`}>378 W</p>
              <p className={`text-2xl font-bold ${textColor}`}>555 W</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoDashboardBox;
