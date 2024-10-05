"use client"

import { useState, useEffect } from 'react';

type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

type DateInfo = {
  day: number;
  month: number;
  year: number;
};

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState<Time>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [currentDate, setCurrentDate] = useState<DateInfo>({
    day: 0,
    month: 0,
    year: 0,
  });

  const [mounted, setMounted] = useState(false); // Track if the component is mounted

  useEffect(() => {
    setMounted(true); // Component has mounted, now we can show the time/date

    const timerId = setInterval(() => {
      const now = new Date();
      setCurrentTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
      setCurrentDate({
        day: now.getDate(),
        month: now.getMonth() + 1,
        year: now.getFullYear(),
      });
    }, 1000);

    return () => clearInterval(timerId); // Clean up the interval on component unmount
  }, []);

  if (!mounted) {
    return null; // Return nothing until the component is mounted
  }

  const formatTime = (time: Time) => {
    const { hours, minutes, seconds } = time;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const formatDate = (date: DateInfo) => {
    const { day, month, year } = date;
    return `${day.toString().padStart(2, '0')}/${month
      .toString()
      .padStart(2, '0')}/${year}`;
  };

  return (
    <div>
       <div className="mb-12 h-10 w-fit text-2xl font-bold">
            Harman Muasa Blog
          </div>
      <p>{`Current Time: ${formatTime(currentTime)}`}</p>
      <p>{`Current Date: ${formatDate(currentDate)}`}</p>
    </div>
  );
};

export default TimeDisplay;
