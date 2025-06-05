import React, { useEffect, useRef, useState } from "react";

const Faq = ({ sectionRefs }) => {
  const containerRef = useRef(null);
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    if (sectionRefs?.current) {
      sectionRefs.current[5] = containerRef.current;
    }

    // Generate bubbles on client only
    const bubbleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 30 + 10}px`,
      height: `${Math.random() * 30 + 10}px`,
      duration: `${Math.random() * 20 + 10}s`,
      delay: `${Math.random() * 10}s`,
    }));

    setBubbles(bubbleArray);
  }, [sectionRefs]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-100 to-cyan-100 relative overflow-hidden"
    >
      {/* Floating bubbles (rendered only on client) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute bg-blue-300 rounded-full opacity-20 animate-floating"
            style={{
              top: bubble.top,
              left: bubble.left,
              width: bubble.width,
              height: bubble.height,
              animationDuration: bubble.duration,
              animationDelay: bubble.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-3xl bg-white/70 backdrop-blur-lg px-8 pt-12 pb-10 rounded-3xl shadow-2xl ring-1 ring-blue-200/40">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
            FAQ
          </h2>
          <p className="mt-3 text-lg text-gray-700 md:text-xl">
            Frequently Asked Questions
          </p>
        </div>

        <div className="mt-10 space-y-6 divide-y divide-blue-200">
          {[
            {
              question: "Who is GEMS for?",
              answer:
                "Small businesses in the UK with 1–50 employees, including retail, consulting, real estate, law, healthcare, and digital services.",
            },
            {
              question: "What does GEMS include?",
              answer:
                "All-in-one cybersecurity: endpoint protection, patching, phishing training, 24/7 threat monitoring, reporting, and support.",
            },
            {
              question: "How much does GEMS cost?",
              answer:
                "Clear, per-device monthly pricing with no hidden fees. Plans start from £17/device/month.",
            },
            {
              question: "Do I need to install anything?",
              answer:
                "Yes, a lightweight security agent will be installed. Our team handles setup and onboarding.",
            },
            {
              question: "What if I already have antivirus or EDR?",
              answer:
                "GEMS can supplement or replace it. Our team will review and ensure compatibility.",
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="group py-4 transition-all duration-300"
            >
              <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-blue-800 hover:text-blue-600">
                <span>{faq.question}</span>
                <svg
                  className="w-6 h-6 transition-transform duration-300 group-open:rotate-180 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed group-open:animate-fadeIn">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes floating {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-floating {
          animation: floating infinite ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .group-open\\:animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Faq;
