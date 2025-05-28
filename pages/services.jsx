import React from 'react';

const Services = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with better blur control */}
      <div className="absolute inset-0 z-0">
        <img 
          src="Sparta.jpeg" // Replace with your high-res image
          alt="Security background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-indigo-900/80"></div>
      </div>

      <div className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Make Your Business Safe!
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Choose the security package that fits your needs
            </p>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Standard Plan */}
            <div className="flex flex-col rounded-xl border border-gray-700 bg-white/5 backdrop-blur-md p-6 shadow-xl transition-all hover:scale-[1.02]">
              <h3 className="text-xl font-medium text-white">Standard</h3>
              <div className="my-6">
                <span className="text-4xl font-bold text-white">$22</span>
                <span className="ml-2 text-gray-300">/device</span>
              </div>

              <a
                href="#"
                className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-center font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Book Now
              </a>

              <ul className="mt-8 space-y-3">
                {[
                  "Continuous security monitoring",
                  "Antivirus/Endpoint Detection",
                  "Remote Monitoring",
                  "Vulnerability Management",
                  "Incident Response",
                  "Quarterly Security Training"
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="h-5 w-5 flex-shrink-0 text-indigo-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium Plan (Featured) */}
            <div className="relative flex flex-col rounded-xl border-2 border-indigo-500 bg-gradient-to-b from-indigo-900/30 to-gray-900/30 p-6 shadow-xl transition-all hover:scale-[1.02]">
              <div className="absolute -top-3 right-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                POPULAR
              </div>
              <h3 className="text-xl font-medium text-white">Premium</h3>
              <div className="my-6">
                <span className="text-4xl font-bold text-white">$49</span>
                <span className="ml-2 text-gray-300">/device</span>
              </div>

              <a
                href="#"
                className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-center font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Book Now
              </a>

              <ul className="mt-8 space-y-3">
                {[
                  "All Standard features plus:",
                  "Threat Intelligence Feeds",
                  "MFA Management",
                  "Compliance Reporting",
                  "Dedicated Account Manager",
                  "Priority Incident Response",
                  "Automated Patching",
                  "Advanced EDR",
                  "Monthly Training"
                ].map((feature, index) => (
                  <li key={feature} className="flex items-start">
                    {index === 0 ? (
                      <span className="text-gray-300 font-medium">{feature}</span>
                    ) : (
                      <>
                        <svg className="h-5 w-5 flex-shrink-0 text-indigo-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col rounded-xl border border-gray-700 bg-white/5 backdrop-blur-md p-6 shadow-xl transition-all hover:scale-[1.02]">
              <h3 className="text-xl font-medium text-white">Enterprise</h3>
              <div className="my-6">
                <span className="text-4xl font-bold text-white">$99</span>
                <span className="ml-2 text-gray-300">/device</span>
              </div>

              <a
                href="#"
                className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-center font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Book Now
              </a>

              <ul className="mt-8 space-y-3">
                {[
                  "All Premium features plus:",
                  "24/7 Security Operations Center",
                  "Custom Security Policies",
                  "Penetration Testing",
                  "Dark Web Monitoring",
                  "Executive Protection",
                  "Custom Training Programs",
                  "Annual Security Audit"
                ].map((feature, index) => (
                  <li key={feature} className="flex items-start">
                    {index === 0 ? (
                      <span className="text-gray-300 font-medium">{feature}</span>
                    ) : (
                      <>
                        <svg className="h-5 w-5 flex-shrink-0 text-indigo-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;