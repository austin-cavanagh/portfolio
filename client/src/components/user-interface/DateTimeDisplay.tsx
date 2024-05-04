import { useEffect, useState } from 'react';

function DateTimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date()); // Update time every second
    }, 1000);

    return () => clearInterval(timerId); // Clean up the interval on component unmount
  }, []);

  const formatDate = (date: Date) => {
    const year = date.getFullYear(); // Gets the full year (4 digits)
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Gets the month, +1 because getMonth() returns 0-11
    const day = date.getDate().toString().padStart(2, '0'); // Gets the day of the month

    // const formattedDate = `${year}-${month}-${day}`; // Formats date as YYYY-MM-DD
    const formattedDate = `${year}:${month}:${day}`; // Formats date as YYYY:MM:DD

    const formattedTime = date.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    return `${formattedDate} ${formattedTime}`; // Combines date and time in the desired format
  };

  return (
    <div className="flex h-[70px] items-center space-x-4 border-t-2 border-[#00bfff] bg-gray-900 p-6 opacity-80">
      <span className="text-xl text-[#00bfff]">{formatDate(currentTime)}</span>
    </div>
  );
}

export default DateTimeDisplay;
