import React, { useEffect, useRef } from 'react';



const First = () => {
  // Refs for sections to observe
  const sectionRefs = useRef([]);

  // Intersection Observer to trigger animations when sections are in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('float-in');
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is in view
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);




  

  return (

    <div className="scroll-smooth">
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
          .scroll-smooth {
            scroll-behavior: smooth;
          }
          .floating-section {
            perspective: 1000px;
            opacity: 0;
            transform: translateY(50px) rotateX(-5deg);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out, box-shadow 0.8s ease-out;
            margin: 20px 0;
            border-radius: 15px;
          }
          .floating-section.float-in {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-delay {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse-once {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          @keyframes gradient-shift {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 0%; }
          }
          @keyframes gradient-shift-delay {
            0% { background-position: 100% 50%; }
            50% { background-position: 0% 0%; }
            100% { background-position: 100% 50%; }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          .animate-fade-in-delay {
            animation: fade-in-delay 1.2s ease-out 0.2s backwards;
          }
          .animate-slide-up {
            animation: slide-up 1s ease-out;
          }
          .animate-pulse-once {
            animation: pulse-once 1.5s ease-in-out;
          }
          .animate-gradient-shift {
            animation: gradient-shift 10s infinite;
            background-size: 200% 200%;
          }
          .animate-gradient-shift-delay {
            animation: gradient-shift-delay 10s infinite 2s;
            background-size: 200% 200%;
          }
        `}
      </style>
    </div>
  );
};

export default First;