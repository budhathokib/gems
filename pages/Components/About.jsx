import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-24 px-6 md:px-20 lg:px-32 text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* Subtle Circuit Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h30v30H0zM30 0h30v30H30z' stroke='%23192937' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }}></div>

      <div className="relative text-center mb-16 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-purple-500 tracking-tight drop-shadow-lg"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          At <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Genese Solution</span>, we make cybersecurity seamless, accessible, and empowering for every business, big or small.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
      >
        {/* Who We Are Card */}
        <motion.div
          variants={itemVariants}
          className="relative bg-white/90 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_10px_30px_rgba(99,102,241,0.3)] group"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
            <Globe className="mr-3 w-8 h-8 text-indigo-600 dark:text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
            Who We Are
          </h3>
          <p className="mb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
            Headquartered in the UK, we safeguard clients across <span className="text-indigo-600 dark:text-indigo-400 font-medium">10 countries</span>. We’re your trusted partner in digital defense.
          </p>
          <p className="mb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
            Our mission is to deliver <span className="font-semibold text-indigo-600 dark:text-indigo-400">robust, simple, and scalable security</span> tailored to your needs.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Driven by innovation, we empower small businesses to thrive securely and confidently in the digital world.
          </p>
        </motion.div>

        {/* GEMS Card */}
        <motion.div
          variants={itemVariants}
          className="relative bg-white/90 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_10px_30px_rgba(99,102,241,0.3)] group"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
  <Shield className="mr-3 w-8 h-8 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
  Introducing&nbsp;<span className="text-indigo-600 dark:text-indigo-400">GEMS</span>
</h3>
          <p className="mb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
            Forget complex, overpriced solutions. <span className="font-semibold text-indigo-600 dark:text-indigo-400">GEMS</span> is our sleek, powerful, and cost-effective cybersecurity platform built for small teams with big ambitions.
          </p>
          <p className="mb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
            Quick to deploy. Budget-friendly. Uncompromising on protection.
          </p>
          <p className="mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
            Focus on leading your business we’ll handle the security.
          </p>
         
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;