import { useState, useEffect } from 'react';

function DateTimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date()); // Update time every second
    }, 1000);

    return () => clearInterval(timerId); // Clean up the interval on component unmount
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'long', // 'long', 'short', 'narrow', 'numeric', or '2-digit'
      day: 'numeric', // 'numeric' or '2-digit'
    };
    return date.toLocaleDateString(undefined, options); // E.g., "April 28"
  };

  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    return date.toLocaleTimeString(undefined, options); // E.g., "23:31:45"
  };

  return (
    <div className="flex h-full items-center space-x-4 border-t-2 border-[#00bfff] bg-gray-900 p-6 text-sm text-white md:text-base lg:text-lg">
      <span className="text-[#00bfff]">{formatDate(currentTime)}</span>
      <span className="font-mono tracking-wider text-[#00bfff]">
        {formatTime(currentTime)}
      </span>
    </div>
  );
}

export default DateTimeDisplay;
