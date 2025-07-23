import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2026-09-15T15:30:00+08:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-xs sm:max-w-md mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="text-center passport-stamp min-w-[60px] sm:min-w-[80px] px-2 py-1 sm:px-4 sm:py-2 flex flex-col items-center justify-center"
        >
          <div className="text-lg sm:text-2xl md:text-3xl font-bold">{value}</div>
          <div className="text-[10px] sm:text-xs uppercase tracking-wider">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;