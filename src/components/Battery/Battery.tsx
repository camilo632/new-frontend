
function Battery() {
  return (
    <div className='h-full w-full flex justify-center items-center flex-row'>
      <div className="flex-grow h-full bg-gray-900 rounded-4xl p-4 px-2 flex flex-col relative border-5 border-gray-700 shadow-[0px_0px_10px_4px] shadow-indigo-950">
        {/* <span className="absolute h-full w-2 bg-amber-300 rounded-3xl py-4 px-2 top-0 left-0 right-0 bottom-0 overflow-hidden">

        </span> */}
        <div className="flex-grow flex flex-col">
            <h2 className="text-6xl text-white">89%</h2>
            <p className="text-3xl text-white">Charging</p>
        </div>
        <div className="w-full flex flex-row justify-between items-end flex-rows">
            <p className="text-3xl font-bold text-white">53.7V</p>
            <p className="text-3xl font-bold text-white">1.3A</p>
            <p className="text-3xl font-bold text-white">75W</p>
        </div>
      </div>
      {/* <span className="w-4 h-20 bg-white rounded-r-xl border-gray-700 border-2"></span> */}
    </div>
  )
}

export default Battery
