import React, { useState, useEffect } from 'react';

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.querySelector('#why-us-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const benefits = [
    {
      title: 'You know there’s a risk - and we’re here to fix it.',
      description: 'Our solution tackles the exact problems keeping small business owners awake at night: threats you don’t see, tech you don’t understand, and costs you can’t afford to escalate.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'One simple plan. One low monthly cost.',
      description: 'We believe security shouldn’t come with hidden fees or fine print. GEMS offers clear, upfront pricing that’s cost-effective and scales as your business grows.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'You can trust Genese.',
      description: 'We’re not just a tech company - we’re your security partner. Backed by years of technology and cybersecurity expertise, Genese is trusted by businesses across industries and borders.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Built for small businesses. Ready on day one.',
      description: 'GEMS is quick to deploy, easy to manage, and requires no in-house expertise. Finally, cybersecurity that makes sense, and makes a difference.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
  ];

  return (
    <section 
      id="why-us-section"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
    >
      {/* Geometric background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="grid grid-cols-10 grid-rows-10 h-full">
            {Array.from({ length: 100 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-gray-400"
                style={{ 
                  opacity: Math.random() * 0.3 + 0.1,
                  transform: `scale(${Math.random() * 0.5 + 0.75})` 
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative metallic accents */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 opacity-20 blur-xl animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 opacity-20 blur-xl animate-pulse animation-delay-3000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative inline-block">
            <span className="relative">
              Why Choose Us?
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-xl border border-gray-300 p-8 shadow-lg 
                transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Metallic accent */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 opacity-30"></div>
              
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full transform rotate-0 group-hover:rotate-12 transition-transform duration-500 opacity-20"></div>
                    <div className="relative text-gray-700">
                      {benefit.icon}
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
              
              {/* Hover effect element */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-500 to-gray-700 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 text-center transform transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <button className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">Get Started Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;