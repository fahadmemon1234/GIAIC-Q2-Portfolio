"use client";
import React, { useState, useEffect, useRef } from "react";
const CountdownTime = () => {
  const [timer, setTimer] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  //   Set
  const handleSet = () => {
    setTimeRemaining(timer);
  };

  const handleStart = () => {
    if (timeRemaining > 0 && !isActive) {
      setIsActive(true);
      intervalRef.current = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }
  };

  // Pause
  const handlePause = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsActive(false);
  };

  // Reset
  const handleReset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsActive(false);
    setTimeRemaining(0);
  };

  useEffect(() => {
    if (timeRemaining <= 0 && intervalRef.current) {
      clearInterval(intervalRef.current);
      setIsActive(false);
    }
  }, [timeRemaining]);

  return (
    <>
      <h3 className="font-bold text-3xl mb-5 text-center pt-10">
        CountDown-Timer Created by Fahad Memon
      </h3>

      <div className="max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-custom-blue bg-white m-auto my-24 lg:my-24">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Count Down-Timer</div>

          <div className="flex flex-col md:flex-row">
            <input
              className="lg:rounded-tr-none lg:rounded-br-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:rounded-tr-none md:rounded-br-none"
              id="countDown"
              type="number"
              value={timer}
              onChange={(e) => setTimer(parseInt(e.target.value))}
              placeholder="Enter number"
              min={0}
            />

            <button
              onClick={handleSet}
              className="mt-2 md:mt-0 lg:rounded-tl-none lg:rounded-bl-none shadow bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:rounded-tl-none md:rounded-bl-none"
            >
              Set
            </button>
          </div>

          <div className="timer max-w-lg mx-auto p-4">
            <h2 className="uppercase text-center pt-5 font-bold text-xl sm:text-xl lg:text-2xl">
              {timeRemaining > 0
                ? `${timeRemaining} Seconds Remaining`
                : "Time's Up!"}
            </h2>
          </div>

          <div className="mx-auto flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
            <button
              onClick={handleStart}
              disabled={isActive || timeRemaining === 0}
              className={`${
                isActive || timeRemaining === 0
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700"
              } text-white font-bold py-2 px-4 rounded-full`}
            >
              Start
            </button>

            <button
              onClick={handlePause}
              disabled={!isActive}
              className={`${
                !isActive
                  ? "bg-yellow-300 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-yellow-700"
              } text-white font-bold py-2 px-4 rounded-full`}
            >
              Pause
            </button>

            <button
              onClick={handleReset}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountdownTime;
