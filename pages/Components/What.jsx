import React, { useEffect, useRef, useState } from "react";

// Data for flowchart services
const services = [
  {
    label: "Endpoint Security",
    iconColor: "bg-orange-500",
    iconSrc: "/icons/es.png",
  },
  {
    label: "24/7 Monitoring",
    iconColor: "bg-red-500",
    iconSrc: "/icons/monitoring.png",
  },
  {
    label: "Patch & Vulnerability Management",
    iconColor: "bg-blue-500",
    iconSrc: "/icons/patches.png",
  },
  {
    label: "Security Awareness Training",
    iconColor: "bg-teal-500",
    iconSrc: "/icons/training1.png",
  },
  {
    label: "Support",
    iconColor: "bg-gray-800",
    iconSrc: "/icons/support1.png",
  },
];

const GEMSCombinedSection = () => {
  const features = [
    "Endpoint Security Software",
    "24/7 Threat Monitoring",
    "Patch & Vulnerability Management",
    "Employee Security Awareness Training",
    "Expert Support and Incident Response",
    "Monthly Security Reports",
  ];

  const wrapperRef = useRef(null);
  const officeRef = useRef(null);
  const gemsRef = useRef(null);
  const serviceRefs = useRef([]);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const updateLines = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper || !officeRef.current || !gemsRef.current) return;

      const svgRect = wrapper.getBoundingClientRect();
      const officeRect = officeRef.current.getBoundingClientRect();
      const gemsRect = gemsRef.current.getBoundingClientRect();

      const officeX = officeRect.right - svgRect.left;
      const officeY = officeRect.top + officeRect.height / 2 - svgRect.top;
      const gemsX = gemsRect.left + gemsRect.width / 2 - svgRect.left;
      const gemsY = gemsRect.top + gemsRect.height / 2 - svgRect.top;

      const newLines = [];

      newLines.push({
        x1: officeX,
        y1: officeY,
        x2: gemsX,
        y2: gemsY,
        color: "#3B82F6",
      });

      serviceRefs.current.forEach((serviceRef) => {
        if (serviceRef) {
          const serviceRect = serviceRef.getBoundingClientRect();
          const serviceX = serviceRect.left - svgRect.left;
          const serviceY = serviceRect.top + serviceRect.height / 2 - svgRect.top;

          newLines.push({
            x1: gemsX,
            y1: gemsY,
            x2: serviceX,
            y2: serviceY,
            color: "#EF4444",
          });
        }
      });

      setLines(newLines);
    };

    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-950 py-20 px-6 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        {/* Left: Enhanced GEMS Info */}
        <div className="relative z-10">
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-blue-400/20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 8 + 2}px`,
                  height: `${Math.random() * 8 + 2}px`,
                  animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              ></div>
            ))}
          </div>
          <div className="relative z-10 bg-gray-900/70 backdrop-blur-sm p-8 rounded-2xl border border-blue-800/30 shadow-2xl space-y-6 hover:scale-102 transition-transform duration-500">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 animate-pulse">
              Genese Essential Managed Security (GEMS)
            </h2>
            <span className="block w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full animate-pulse-slow"></span>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              All the protection you need - nothing you don’t
            </p>
            <div className="text-3xl md:text-4xl font-bold text-blue-300">
              £17 <span className="text-lg md:text-xl text-gray-400">/device monthly</span>
            </div>
            <ul className="space-y-5">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/60 hover:bg-gray-700/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 group"
                >
                  <svg
                    className="w-6 h-6 text-blue-500 animate-bounce-slow group-hover:text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-200 text-base md:text-lg font-medium group-hover:text-blue-200 transition-colors duration-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <button className="mt-8 px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10">Secure Your Business Now</span>
              <div className="absolute inset-0 bg-blue-700/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            </button>
          </div>
        </div>

        {/* Right: GEMS Flowchart */}
        <div ref={wrapperRef} className="relative flex flex-col md:flex-row items-center justify-center gap-12 p-6 bg-gray-800/80 rounded-xl shadow-2xl min-h-[400px] z-10">
          {/* SVG lines */}
          <svg className="absolute w-full h-full pointer-events-none z-0">
            {lines.map((line, idx) => (
              <line
                key={idx}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke={line.color}
                strokeWidth="2"
                strokeDasharray="10, 5"
                className="animate-moveDash"
              />
            ))}
          </svg>

          {/* Office */}
<div ref={officeRef} className="flex flex-col items-center gap-6 z-10">
  <div className="w-32 h-32 bg-blue-200 rounded-md flex justify-center items-center shadow-lg hover:scale-105 transition-transform duration-300">
    <img
      src="/Office.png" // Placeholder for Office image
      alt="Office"
      className="w-full h-full object-cover rounded-md"
      onError={(e) => {
        e.target.src = "https://via.placeholder.com/150?text=Office";
        console.error("Failed to load Office image");
      }}
    />
  </div>
</div>

          {/* GEMS Core */}
          <div ref={gemsRef} className="relative flex justify-center items-center z-10">
            <div className="bg-gradient-to-br from-red-600 to-red-800 text-white text-xl font-bold py-6 px-8 rounded-full shadow-lg border-4 border-red-300 hover:shadow-red-500/50 transition-all duration-300">
              GEMS
            </div>
            <div className="absolute w-full h-full border-dashed border-blue-400 border-2 rounded-full animate-pulse opacity-30"></div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4 z-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                ref={(el) => (serviceRefs.current[idx] = el)}
                className="flex items-center gap-4 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/70 transition-colors duration-300"
              >
                <div className={`p-3 rounded-full ${service.iconColor} shadow-md flex items-center justify-center w-12 h-12`}>
                  <img
                    src={service.iconSrc || "https://via.placeholder.com/24?text=Icon"}
                    alt={`${service.label} icon`}
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/24?text=Icon";
                      console.error(`Failed to load icon for ${service.label}`);
                    }}
                  />
                </div>
                <span className="text-gray-200 font-medium text-lg">{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-moveDash {
          stroke-dasharray: 10, 5;
          stroke-dashoffset: 0;
          animation: moveDash 2s linear infinite;
        }
        @keyframes moveDash {
          to {
            stroke-dashoffset: -30;
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default GEMSCombinedSection;
