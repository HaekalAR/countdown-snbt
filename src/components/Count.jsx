import { useState, useEffect } from "react";

const Count = () => {
  const targetDate = new Date("2025-04-26T04:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center font-poppins lg:px-20 md:px-12 px-4">
      <div className="bg-[#131313] w-full h-[95vh] border border-[#202020] rounded-md py-7 lg:px-14 md:px-12 px-7 text-white">
        <div className="w-full h-full flex flex-col gap-10 justify-center">
          <div className="w-full h-fit flex flex-col items-center">
            <h1 className="font-bold uppercase text-2xl tracking-wider text-center">
              <span className="text-yellow-400">Your Time</span> is Almost{" "}
              <span className="text-red-500">Come</span>
            </h1>
          </div>
          <div className="flex items-center justify-center lg:gap-7 md:gap-4 gap-2">
            <div className="p-4 border border-gray-600 rounded-md lg:text-5xl lg:w-32 lg:h-32 md:text-3xl md:w-22 md:h-22 w-20 h-19 flex flex-col items-center justify-center lg:font-bold md:font-semibold font-semibold">
              <span className="h-[90%] flex items-center justify-center">
                {timeLeft.days}
              </span>
              <span className="uppercase text-medium text-xs text-gray-300 lg:tracking-wider lg:flex md:flex hidden">
                days
              </span>
              <span className="uppercase text-medium text-xs text-gray-300 lg:tracking-wider lg:hidden md:hidden flex">
                dys
              </span>
            </div>
            <p className="text-3xl font bold">:</p>
            <div className="p-4 border border-gray-600 rounded-md lg:text-5xl lg:w-32 lg:h-32 md:text-3xl md:w-22 md:h-22 w-20 h-19 flex flex-col items-center justify-center lg:font-bold md:font-semibold font-semibold">
              <span className="h-[90%] flex items-center justify-center">
                {timeLeft.hours}
              </span>
              <span className="uppercase text-medium text-xs text-gray-300 lg:tracking-wider lg:flex md:flex hidden">
                hours
              </span>
              <span className="uppercase text-medium text-xs text-gray-300 lg:tracking-wider lg:hidden md:hidden flex">
                hrs
              </span>
            </div>
            <p className="text-3xl font bold">:</p>
            <div className="p-4 border border-gray-600 rounded-md lg:text-5xl lg:w-32 lg:h-32 md:text-3xl md:w-22 md:h-22 w-20 h-19 flex flex-col items-center justify-center lg:font-bold md:font-semibold font-semibold">
              <span className="h-[90%] flex items-center justify-center">
                {timeLeft.minutes}
              </span>
              <span className="uppercase text-medium text-xs text-gray-300 lg:tracking-wider lg:flex md:flex hidden">
                minutes
              </span>
              <span className="uppercase text-medium text-xs text-gray-300 lg:tracking-wider lg:hidden md:hidden flex">
                mts
              </span>
            </div>
            <p className="text-3xl font bold">:</p>
            <div className="p-4 border border-gray-600 rounded-md lg:text-5xl lg:w-32 lg:h-32 md:text-3xl md:w-22 md:h-22 w-20 h-19 flex flex-col items-center justify-center lg:font-bold md:font-semibold font-semibold">
              <span className="h-[90%] flex items-center justify-center">
                {timeLeft.seconds}
              </span>
              <span className="uppercase text-medium text-xs text-gray-300 lg:tracking-wider lg:flex md:flex hidden">
                seconds
              </span>
              <span className="uppercase text-medium text-xs text-gray-300 lg:tracking-wider lg:hidden md:hidden flex">
                scs
              </span>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-yellow-400 capitalized font-semibold text-sm uppercase lg:tracking-wider">
              Prepare yourself my blud
            </p>
          </div>
        </div>
        <div className="h-[5vh] font-geist text-white flex items-center justify-center pb-7">
          <div className="text-xs font-medium lg:tracking-wider">
            CielAzathoth
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
