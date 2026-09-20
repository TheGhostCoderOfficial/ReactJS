import { useState, useEffect } from 'react';

export default function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const timeString = now.toLocaleTimeString('en-US', {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit"
  });

  const dateString = now.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="hidden md:flex justify-center items-center gap-2">
      <p className="text-4xl font-medium">{timeString}</p>
      <div className="flex flex-col">
        <p className="text-xs font-semibold">am</p>
        <p className="text-xs font-medium">{dateString}</p>
      </div>
    </div>

  );
}