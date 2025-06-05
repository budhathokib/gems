import React, { useRef } from 'react';

const Gems = () => {
  const sectionRefs = useRef([]);

  return (
    <main
      ref={(el) => (sectionRefs.current[0] = el)}
      className="flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-[#fffdf7] to-[#fffdd0] overflow-hidden"
    >
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
        <img
          src="/Meeting.jpg"
          alt="IT Team Collaboration"
          className="w-full h-full object-cover rounded-r-lg md:rounded-none shadow-lg"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
            console.error('Failed to load image: Meeting.jpg');
          }}
        />
      </div>

      {/* Right Section - Text */}
      <div className="w-full md:w-1/2 bg-[#fffdf7] text-gray-900 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 md:py-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-gray-800">
          Genese Essential Managed Security (GEMS)
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
          GEMS is your all-in-one cybersecurity shield, purpose-built for small businesses that need robust protection
          without enterprise overhead. We simplify security, so you can focus on running your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://calendly.com/event_types/user/me"
            className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white text-base sm:text-lg font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Speak to a Security Specialist
          </a>
        </div>
      </div>
    </main>
  );
};

export default Gems;