import { useEffect, useState } from "react";

export default function AnalogClick() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const sec = time.getSeconds();
  const min = time.getMinutes();
  const hr = time.getHours();

  const secDeg = sec * 6;
  const minDeg = min * 6 + sec * 0.1;
  const hrDeg = (hr % 12) * 30 + min * 0.5;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white px-4">
      
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl  font-bold mb-20 tracking-wide">
        Analog Clock
      </h1>

      {/* Clock */}
      <div className="relative w-[90vw] max-w-[350px] aspect-square rounded-full border-4 border-white bg-slate-800">

        {/* Numbers */}
        {[...Array(12)].map((_, i) => {
          const angle = (i + 1) * 30;
          return (
            <div
              key={i}
              className="absolute inset-0 flex items-start justify-center font-semibold"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <span
                className="mt-2 text-lg sm:text-xl"
                style={{ transform: `rotate(-${angle}deg)` }}
              >
                {i + 1}
              </span>
            </div>
          );
        })}

        {/* Hour Hand */}
        <div
          className="absolute w-[4%] h-[25%] bg-white rounded bottom-1/2 left-1/2 origin-bottom"
          style={{ transform: `translateX(-50%) rotate(${hrDeg}deg)` }}
        />

        {/* Minute Hand */}
        <div
          className="absolute w-[3%] h-[35%] bg-gray-300 rounded bottom-1/2 left-1/2 origin-bottom"
          style={{ transform: `translateX(-50%) rotate(${minDeg}deg)` }}
        />

        {/* Second Hand */}
        <div
          className="absolute w-[2%] h-[40%] bg-red-500 bottom-1/2 left-1/2 origin-bottom"
          style={{ transform: `translateX(-50%) rotate(${secDeg}deg)` }}
        />

        {/* Center Dot */}
        <div className="absolute w-4 h-4 bg-red-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}
