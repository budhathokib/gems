import React from 'react';

const Top = () => {
  return (
    
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen flex flex-col items-center justify-center py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6 animate-fade-in-up z-10">
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 leading-tight">
              Secure Your Small Business with Our Fully Managed Cybersecurity Services
            </h1>
            <p className="max-w-lg font-serif text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">
              Focus on growing your business while we handle your cybersecurity end-to-end, ensuring peace of mind with robust, tailored protection.
            </p>
          <div className="flex space-x-4">
  <a
    href="Gems" // Replace with your actual target section or external URL
    className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-blue-600 rounded-full hover:from-teal-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-teal-500/50"
  >
    Get Started
  </a>
</div>

          </div>

          {/* Image Space */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0 animate-fade-in-right">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src="/Top.jpeg"
                alt="Cybersecurity Illustration"
                className="w-full rounded-2xl shadow-2xl border border-gray-700 object-cover transform hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500x400?text=Image+Not+Found';
                  console.error('Failed to load image: Top.jpeg');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-slow-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-slow-pulse"></div>
        </div>
      </div>

      {/* Additional Section for Visual Balance */}
      <div className="mt-16 text-center">
        <p className="font-sans text-2xl md:text-3xl font-bold text-gray-200">
          Trusted by Small Businesses Worldwide
        </p>
        <p className="mt-4 max-w-3xl mx-auto font-serif text-lg text-gray-400">
          Join thousands of businesses that rely on our expertise to safeguard their data and operations with seamless, proactive security solutions.
        </p>
      </div>
    </div>
  );
};

export default Top;