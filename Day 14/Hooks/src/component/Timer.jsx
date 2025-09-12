import { useState, useEffect, useRef } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prevSeconds => {
          let newSeconds = prevSeconds + 1;
          let newMinutes = minutes;
          let newHours = hours;

          if (newSeconds === 60) {
            newSeconds = 0;
            newMinutes += 1;
            if (newMinutes === 60) {
              newMinutes = 0;
              newHours += 1;
            }
          }

          setMinutes(newMinutes);
          setHours(newHours);
          return newSeconds;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, minutes, hours]);

  const handleReset = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsRunning(false);
  };

  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mt-5 mb-2 text-blue-700">Welcome to the Timer</h1>
      <h2 className="text-xl mb-4 text-gray-700">Time Elapsed</h2>
      <h3 className="text-4xl font-mono mb-6 bg-white px-6 py-3 rounded shadow">
        {hours.toString().padStart(2, '0')} : {minutes.toString().padStart(2, '0')} : {seconds.toString().padStart(2, '0')}
      </h3>
      <div className="flex gap-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          onClick={handleReset}
        >
          Reset Timer
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={() => setIsRunning(true)}
          disabled={isRunning}
        >
          Start Timer
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          onClick={() => setIsRunning(false)}
          disabled={!isRunning}
        >
          Stop Timer
        </button>
      </div>
    </div>
  );
}
