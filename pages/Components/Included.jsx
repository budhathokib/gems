import React, { useState } from 'react';

const Gems = () => {
  const [activeGem, setActiveGem] = useState(null);

  const features = [
    {
      name: 'Endpoint Security Software',
      description: 'Robust protection for all your devices against malware and threats.',
      icon: '/icons/shield.png',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      name: '24/7 Threat Monitoring',
      description: 'Continuous surveillance to detect and neutralize risks in real-time.',
      icon: '/icons/eye.png',
      color: 'from-purple-500 to-indigo-400'
    },
    {
      name: 'Patch & Vulnerability Management',
      description: 'Automated updates to keep your systems secure and compliant.',
      icon: '/icons/patch.png',
      color: 'from-emerald-500 to-teal-400'
    },
    {
      name: 'Employee Security Training',
      description: 'Empower your team to recognize and avoid cyber threats.',
      icon: '/icons/training.png',
      color: 'from-amber-500 to-yellow-400'
    },
    {
      name: 'Expert Support & Response',
      description: 'Access to real experts for immediate help when you need it.',
      icon: '/icons/support.png',
      color: 'from-rose-500 to-pink-400'
    },
    {
      name: 'Monthly Security Reports',
      description: 'Clear, actionable insights about your security posture.',
      icon: '/icons/report.png',
      color: 'from-sky-500 to-blue-400'
    },
    {
      name: 'Scalable Protection',
      description: 'GEMS adapts to your business growth, ensuring seamless security.',
      icon: '/icons/scale.png',
      color: 'from-violet-500 to-purple-400'
    },
    {
      name: 'Proactive Threat Monitoring',
      description: 'Stay ahead of threats with preemptive detection and response.',
      icon: '/icons/Proactive.png',
      color: 'from-lime-500 to-green-400'
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-indigo-600 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="pattern-dots pattern-blue-500 pattern-opacity-100 pattern-size-6 w-full h-full"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-4 py-1 bg-blue-800/40 backdrop-blur-sm rounded-full border border-blue-600/30 text-blue-200 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Comprehensive Security Solution
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 mb-4 leading-tight">
            Genese Essential Managed Security
          </h1>
          <div className="inline-block text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-200 text-transparent bg-clip-text mb-5">
            <span className="text-white">(</span>GEMS<span className="text-white">)</span>
          </div>

          <p className="text-xl sm:text-2xl text-blue-200 max-w-3xl mx-auto mb-8">
            Enterprise-grade protection tailored for your business needs
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="bg-blue-800/40 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-blue-700/30 shadow-lg">
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">£17<span className="text-xl text-blue-300">/device</span></p>
              <p className="text-blue-300 text-sm">monthly subscription</p>
            </div>

            <a
              href="https://calendly.com/event_types/user/me"
              className="relative overflow-hidden inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-lg py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 group"
            >
              <span className="relative z-10">Speak to a Security Specialist</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-white/20 rounded-full blur-sm group-hover:blur-md transition-all duration-500"></div>
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12">All the protection you need - nothing you don't</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${feature.color} p-0.5 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  activeGem === index ? 'ring-2 ring-white/50 z-10' : ''
                }`}
                onMouseEnter={() => setActiveGem(index)}
                onMouseLeave={() => setActiveGem(null)}
              >
                <div className="h-full bg-blue-900/90 backdrop-blur-sm rounded-2xl p-6 flex flex-col">
                  <div className="mb-4 flex justify-center">
                    <div className={`bg-gradient-to-br ${feature.color} p-3 rounded-xl w-14 h-14 flex items-center justify-center`}>
                      <div className="bg-blue-900/80 w-10 h-10 rounded-lg flex items-center justify-center">
                        <img
                          src={feature.icon}
                          alt={`${feature.name} icon`}
                          className="w-6 h-6"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/24?text=Icon';
                            console.error(`Failed to load icon: ${feature.icon}`);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 text-center">{feature.name}</h3>
                  <p className="text-blue-200 text-sm flex-grow">{feature.description}</p>

                  <div className="mt-4 flex justify-center">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial/Callout */}
        <div className="mt-20 max-w-4xl mx-auto bg-blue-800/40 backdrop-blur-sm rounded-2xl border border-blue-700/30 p-8 md:p-10 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full filter blur-2xl"></div>

          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Why businesses choose GEMS</h3>
            </div>

            <p className="text-blue-200 mb-6">
              "GEMS provides the perfect balance of comprehensive security and simplicity. 
              We get enterprise-grade protection without the complexity or high costs of traditional solutions."
            </p>

            <div className="flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
              <div className="ml-4">
                <p className="font-medium text-white">Niranjan Kunwar</p>
                <p className="text-sm text-blue-300">CTO at Genese Solution</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              background: `rgba(${Math.random() > 0.5 ? '96, 165, 250' : '103, 232, 249'}, ${Math.random() * 0.4 + 0.1})`,
              animation: `float${i % 3} ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float0 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-40px) translateX(20px); }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(-15px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-50px) translateX(10px); }
        }
        .pattern-dots {
          background-image: radial-gradient(rgba(96, 165, 250, 0.5) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default Gems;