import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-scroll';
import profilePhoto from '../assets/my_photo.jpg';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = [
    'Développeur Full Stack',
    'Expert Java/Spring Boot',
    'Développeur React & Angular',
    'Spécialiste .NET'
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 20,
  }));

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] animate-pulse opacity-20"></div>
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Parallax effect */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          x: mousePosition.x / 50,
          y: mousePosition.y / 50,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full text-sm font-medium text-white shadow-lg">
                👋 Bienvenue sur mon portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4 text-white"
            >
              Salman{' '}
              <span className="gradient-text">
                BOUALOUCHI
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-16 mb-6 overflow-hidden"
            >
              <motion.h2
                key={currentRole}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
              >
                {roles[currentRole]}
              </motion.h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-lg mb-4 max-w-xl"
            >
              Passionné par le développement web moderne, spécialisé dans les technologies
              Java/Spring Boot, Angular, React.js et .NET. Je transforme des idées en solutions
              digitales innovantes.
            </motion.p>

            {/* Location and contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start text-gray-400 text-sm"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-cyan-400" />
                <span>Casablanca, Maroc</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-cyan-400" />
                <span>salmanboualouchi@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-cyan-400" />
                <span>06 52 92 55 40</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Link to="contact" smooth={true} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(102, 126, 234, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  Me Contacter
                </motion.button>
              </Link>

              <Link to="projects" smooth={true} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Voir Projets
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 mt-8 justify-center md:justify-start"
            >
              <motion.a
                href="https://github.com/Sboualouchi7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <Github className="text-white" size={24} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/salman-boualouchi-b8559b226"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <Linkedin className="text-white" size={24} />
              </motion.a>

              <motion.a
                href="mailto:salmanboualouchi@gmail.com"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="text-white" size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] opacity-50 blur-xl"
            ></motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative z-10"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                  <img
                    src={profilePhoto}
                    alt="Salman BOUALOUCHI"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg"
              >
                <span className="text-white font-bold text-sm">Java Expert</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
              >
                <span className="text-white font-bold text-sm">React Pro</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link to="about" smooth={true} duration={500}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
            >
              <ChevronDown className="text-white" size={32} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

