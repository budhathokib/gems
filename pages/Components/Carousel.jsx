import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const images = [
    {
      src: '/certs/Iso.png', 
      title: 'ISO 27001',
      desc: 'International Security Standard',
      bg: 'from-blue-800 to-indigo-900',
    },
    {
      src: '/certs/Ccsp.png',
      title: 'CCSP',
      desc: 'Certified Cloud Security Professional',
      bg: 'from-emerald-700 to-green-900',
    },
    {
      src: '/certs/Ceh.png',
      title: 'CEH',
      desc: 'Certified Ethical Hacker',
      bg: 'from-purple-800 to-violet-900',
    },
    {
      src: '/certs/Cissp.png',
      title: 'CISSP',
      desc: 'Certified Information Systems Security Professional',
      bg: 'from-amber-700 to-orange-900',
    },
    {
      src: '/certs/Comptia.png',
      title: 'COMP-TIA',
      desc: 'Computing Technology Industry Association',
      bg: 'from-rose-800 to-pink-900',
    },
    {
      src: '/certs/Pmp.png',
      title: 'PMP',
      desc: 'Project Management Professional',
      bg: 'from-cyan-700 to-teal-900',
    },
    {
      src: '/certs/Csa.png',
      title: 'CSA',
      desc: 'Certified Security Analyst',
      bg: 'from-indigo-700 to-blue-900',
    },
    {
      src: '/certs/Aws.png',
      title: 'AWS',
      desc: 'Cloud Security Assurance',
      bg: 'from-lime-700 to-green-800',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, 3000);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Certifications</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Trusted globally for industry-leading standards and compliance
        </p>
      </div>

      <div
        className="relative w-full max-w-4xl h-[400px] rounded-2xl overflow-hidden shadow-2xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {images.map((item, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div
              className={`w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br ${item.bg} text-white`}
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-md w-full">
                <div className="flex justify-center mb-6">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-32 h-32 object-contain rounded-xl"
                    onError={(e) => {
                      e.target.src = '/images/fallback.png';
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 text-gray-200">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-all"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-all"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === idx ? 'bg-white' : 'bg-white/40'
              } transition-all duration-300`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Auto-rotation indicator */}
        {/* <div className="absolute top-4 right-4 z-20">
          <div className="bg-black/40 px-3 py-1 rounded-full text-sm text-white flex items-center">
            <span className={`w-2 h-2 rounded-full mr-2 ${paused ? 'bg-red-500' : 'bg-green-500'}`} />
            {paused ? 'Paused' : 'Auto-rotating'}
          </div>
        </div> */}
      </div>

      {/*  */}
    </div>
  );
};

export default Carousel;