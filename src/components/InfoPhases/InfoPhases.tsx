import { motion } from "framer-motion";
import "./InfoPhases.scss";

interface InfoPhasesProps {
    name: string;
    power: number;
    color: string;
    disable: boolean;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    textColor: string;
  }

function InfoPhases({ name, power, color, disable, setIsExpanded, textColor }: InfoPhasesProps) {
  return (
    <>
        {/* Background with opacity when card is fully expanded */}
        <motion.div
            className="fixed inset-0 bg-black opacity-60 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Card Container when fully expanded */}
          <motion.div
            className={`fixed inset-0 info-dashboard-box h-full w-full rounded-xl p-3 ${color} border-gray-700 border-5 shadow-[0px_0px_10px_4px] shadow-indigo-950 z-40`}
            style={{
              height: "calc(90vh - 75px)",  
              width: "90vw",  
              top: "75px",  
              left: "5%",  
            }}
            onClick={() => setIsExpanded(false)}
            layoutId={`card-${name}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay:0.1, type:"spring",}}
            exit={{ opacity: 1 }}
          >
            <motion.div
              className="info-phases-container flex flex-col h-full w-full p-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, }}
              exit={{ opacity: 0 }}
            >
              <div className="grid grid-cols-2 h-full w-full">
                <div>
                    <p className={`text-3xl font-bold pb-2 ${textColor}`}>{name}</p>
                    <p className={`text-5xl font-bold ${textColor}`}>{disable ? "--- W": `${power} W`}</p>
                </div>
                <div className="flex justify-end">
                    <span className={`text-4xl font-bold ${textColor}`}>X</span>
                </div>
              </div>
      
              <div className="flex justify-center items-center w-full h-full">
                {name !== "Solaire" && (
                  <div className="info-phases border-t-4 border-gray-700 grid grid-rows-3 w-full h-full test">
                    <ul className="grid grid-cols-5 place-items-center">
                        <li className="justify-self-start">L1</li>
                        <li className="justify-self-end">1786 W</li>
                        <li className="justify-self-end">243 V</li>
                        <li className="justify-self-end">6.3 A</li>
                        <li className="justify-self-end">50.1 Hz</li>
                    </ul>
                    <ul className="grid grid-cols-5 place-items-center">
                        <li className="justify-self-start">L2</li>
                        <li className="justify-self-end">1786 W</li>
                        <li className="justify-self-end">243 V</li>
                        <li className="justify-self-end">6.3 A</li>
                        <li className="justify-self-end">50.1 Hz</li>
                    </ul>
                    <ul className="grid grid-cols-5 place-items-center">
                        <li className="justify-self-start">L3</li>
                        <li className="justify-self-end">1786 W</li>
                        <li className="justify-self-end">243 V</li>
                        <li className="justify-self-end">6.3 A</li>
                        <li className="justify-self-end">50.1 Hz</li>
                    </ul>
                    
                  </div>
                )}
              </div>
            </motion.div>
        </motion.div>
    </>
  )
}

export default InfoPhases
