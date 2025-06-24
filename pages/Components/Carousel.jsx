import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const images = [
    {
      src: '/certs/Iso.png',
      title: 'ISO 27001',
      desc: 'International Security Standard',
      bg: 'from-blue-700 to-indigo-800',
    },
    {
      src: '/certs/Ccsp.png',
      title: 'CCSP',
      desc: 'Certified Cloud Security Professional',
      bg: 'from-emerald-600 to-green-800',
    },
    {
      src: '/certs/Ceh.png',
      title: 'CEH',
      desc: 'Certified Ethical Hacker',
      bg: 'from-purple-700 to-violet-800',
    },
    {
      src: '/certs/Cissp.png',
      title: 'CISSP',
      desc: 'Certified Information Systems Security Professional',
      bg: 'from-amber-600 to-orange-800',
    },
    {
      src: '/certs/Comptia.png',
      title: 'COMP-TIA',
      desc: 'Computing Technology Industry Association',
      bg: 'from-rose-700 to-pink-800',
    },
    {
      src: '/certs/Pmp.png',
      title: 'PMP',
      desc: 'Project Management Professional',
      bg: 'from-cyan-600 to-teal-800',
    },
    {
      src: '/certs/Csa.png',
      title: 'CSA',
      desc: 'Certified Soc Analyst',
      bg: 'from-indigo-600 to-blue-800',
    },
    {
      src: '/certs/Aws.png',
      title: 'AWS',
      desc: 'Cloud Security Assurance',
      bg: 'from-lime-600 to-green-700',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [paused, images.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animation: `float ${Math.random() * 8 + 8}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/30 to-transparent"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 animate-pulse">
          Our Certifications
        </h2>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-3 drop-shadow-md">
          Trusted globally for industry-leading standards and compliance
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative w-full max-w-4xl sm:max-w-5xl h-[450px] sm:h-[500px] rounded-3xl overflow-hidden bg-gray-900/30 backdrop-blur-md border border-blue-800/20 shadow-2xl glow-effect"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {images.map((item, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              idx === activeIndex
                ? 'translate-x-0 opacity-100 z-10'
                : idx < activeIndex
                ? '-translate-x-full opacity-0 z-0'
                : 'translate-x-full opacity-0 z-0'
            }`}
          >
            <div
              className={`w-full h-full flex flex-col items-center justify-center p-6 sm:p-8 bg-gradient-to-br ${item.bg} text-white group hover:scale-[1.02] transition-transform duration-500`}
            >
              <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl max-w-md w-full flex flex-col items-center animate-slide-up">
                <div className="flex justify-center mb-6">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-28 h-28 sm:w-36 sm:h-36 object-contain rounded-lg animate-fade-in"
                    onError={(e) => {
                      e.target.src = '/images/fallback.png';
                      console.error(`Failed to load image: ${item.src}`);
                    }}
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold drop-shadow-lg text-center">{item.title}</h3>
                <p className="mt-2 text-gray-200 text-sm sm:text-base md:text-lg text-center drop-shadow-md">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-900/50 hover:bg-blue-700/70 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 group"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-900/50 hover:bg-blue-700/70 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 group"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'bg-gradient-to-r from-blue-400 to-cyan-300 scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(8px); }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; scale: 0.8; }
          to { opacity: 1; scale: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .glow-effect {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Carousel;