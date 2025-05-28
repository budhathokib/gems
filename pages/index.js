import React, { useEffect, useState } from 'react';

const ComingSoonNepali = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '००',
    hours: '००',
    minutes: '००',
    seconds: '००',
  });

  const convertToNepaliNumerals = (number) => {
    return String(number).replace(/\d/g, (d) => '0123456789'[d]);
  };

  useEffect(() => {
    const countDownDate = new Date('Dec 30, 2025 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: convertToNepaliNumerals(Math.floor(distance / (1000 * 60 * 60 * 24))),
          hours: convertToNepaliNumerals(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
          minutes: convertToNepaliNumerals(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
          seconds: convertToNepaliNumerals(Math.floor((distance % (1000 * 60)) / 1000)),
        });
      } else {
        clearInterval(timer);
      }
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-900 h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-6">Coming Soon</h1>
      <div className="flex text-2xl mb-6">
        <div className="mr-2">
          <span className="font-semibold">{timeLeft.days}</span> Day
        </div>
        <div className="mr-2">
          <span className="font-semibold">{timeLeft.hours}</span> Hour
        </div>
        <div className="mr-2">
          <span className="font-semibold">{timeLeft.minutes}</span> Minute
        </div>
        <div>
          <span className="font-semibold">{timeLeft.seconds}</span> Second
        </div>
      </div>

      <form className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <input
          type="email"
          // placeholder="Give Email"
          className="rounded-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          {/* Subscription */}
        </button>
      </form>

      <div className="mt-4 space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default ComingSoonNepali;
