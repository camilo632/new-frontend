import { useState } from "react";
import { motion } from "motion/react"

function Battery() {

  const textColor = "text-white";
  const [isCharging] = useState<number>(1);


  //--------------------------------------------TEST-----------------------------------
  const [count] = useState(70);
  // const [isIncreasing, setIsIncreasing] = useState(true); // Controla si el número debe aumentar o disminuir
  // const targetValue = 100; // El valor objetivo

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((prev) => {
  //       if (isIncreasing) {
  //         setIsCharging(1);
  //         if (prev < targetValue) {
  //           return prev + 1; // Aumenta hasta 100
  //         } else {
  //           setIsIncreasing(false); // Cambia la dirección para bajar
  //           return prev; // Mantiene el valor en 100
  //         }
  //       } else {
  //         setIsCharging(2);
  //         if (prev > 0) {
  //           return prev - 1; // Disminuye hasta 0
  //         } else {
  //           setIsIncreasing(true); // Cambia la dirección para subir
  //           return prev; // Mantiene el valor en 0
  //         }
  //       }
  //     });
  //   }, 1000); // Intervalo en milisegundos para la animación

  //   return () => clearInterval(interval); // Limpiar intervalos si el componente se desmonta
  // }, [isIncreasing]);

  //---------------------------------------------------------------------------

  return (
    <div className='h-full w-full flex justify-center items-center flex-row'>
      <div className="flex-grow h-full bg-gray-900 rounded-4xl p-4 px-2 flex flex-col relative border-5 border-gray-700 shadow-[0px_0px_10px_4px] shadow-indigo-950 flex flex-col justify-between overflow-hidden">
        <motion.span className="absolute w-full bg-cyan-500 opacity-50 rounded-3xl py-4 bottom-0 right-0 left-0 overflow-hidden"
        style={{
          height: `${count}%`
        }}
        transition={{ type: "spring", stiffness: 100 }}
        >
          {isCharging !== 0 && (
            <motion.span
              className={`absolute h-full w-full ${isCharging === 1 ? "bg-gradient-to-b from-white to-transparent" : "bg-gradient-to-b from-transparent to-white"} rounded-3xl py-4 bottom-0 right-0 left-0`}
              animate={{
                y: isCharging === 1 ? ["100%", "-100%"] : ["-100%", "100%"],
              }}
              transition={{ repeat: Infinity, duration: 1.7, ease:"easeIn" }}
            />
          )}
        </motion.span>
        <div className="flex flex-row justify-between items-center">
          <h1 className={`text-3xl ${textColor} font-bold`}>OlenMove</h1>
          <p className={`text-2xl font-bold ${textColor}`}>30 C°</p>          
          </div>
        <div className="flex flex-col z-10">
            <h2 className={`text-6xl ${textColor} font-bold`}>    
              {count} %
            </h2>
            <p className={`text-2xl ${textColor}`}>En charge</p>
        </div>
        <div className="w-full flex flex-row justify-between items-end flex-rows z-10">
            <p className={`text-2xl font-bold ${textColor}`}>53.7V</p>
            <p className={`text-2xl font-bold ${textColor}`}>1.3A</p>
            <p className={`text-2xl font-bold ${textColor}`}>75W</p>
        </div>
      </div>
      {/* <span className="w-4 h-20 bg-white rounded-r-xl border-gray-700 border-2"></span> */}
    </div>
  )
}

export default Battery
