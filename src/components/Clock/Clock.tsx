/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { ClockData, ClockWrapper } from "./Clock.style";

const Clock = () => {
  const [days, setDays] = useState(new Date().getTime());
  const [hours, setHours] = useState(new Date().getTime());
  const [minutes, setMinutes] = useState(new Date().getTime());
  const [seconds, setSeconds] = useState(new Date().getTime());

  const countDown = () => {
    let interval: any;
    const destination = new Date('Feb 1, 2023').getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;

      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(different % (1000 * 60) / 1000);
      if(destination < 0) clearInterval(interval.current)
      else{
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    })
    // console.log(destination)
  }
  useEffect(() => {
    countDown();
  })
  
  return (
    <ClockWrapper className="gap-3">
      <ClockData className="gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-3">{days}</h1>
          <h5 className="text-white fs-5">Days</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </ClockData>
      <ClockData className="gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-3">{hours}</h1>
          <h5 className="text-white fs-5">Hours</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </ClockData>
      <ClockData className="gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-3">{minutes}</h1>
          <h5 className="text-white fs-5">Minuts</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </ClockData>
      <ClockData className="gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-3">{seconds}</h1>
          <h5 className="text-white fs-5">Seconds</h5>
        </div>
      </ClockData>
    </ClockWrapper>
  );
};

export default Clock;
