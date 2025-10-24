import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, FolderGit2, GraduationCap, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', to: 'home', icon: Home },
    { name: 'À propos', to: 'about', icon: User },
    { name: 'Compétences', to: 'skills', icon: Code },
    { name: 'Expérience', to: 'experience', icon: Briefcase },
    { name: 'Projets', to: 'projects', icon: FolderGit2 },
    { name: 'Formation', to: 'education', icon: GraduationCap },
    { name: 'Contact', to: 'contact', icon: Mail },
  ];

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] z-50 origin-left"
        style={{
          scaleX: scrolled ? 1 : 0,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-purple-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <Link to="home" smooth={true} duration={500}>
                <h1 className="text-2xl md:text-3xl font-bold gradient-text">
                  SB
                </h1>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  onSetActive={() => setActiveSection(item.to)}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeSection === item.to
                        ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <item.icon size={16} />
                    {item.name}
                  </motion.button>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-80}
                      onClick={() => setIsOpen(false)}
                      onSetActive={() => setActiveSection(item.to)}
                    >
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className={`w-full px-4 py-3 rounded-lg text-left font-medium transition-all duration-300 flex items-center gap-3 ${
                          activeSection === item.to
                            ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white'
                            : 'text-gray-300 hover:bg-white/5'
                        }`}
                      >
                        <item.icon size={20} />
                        {item.name}
                      </motion.button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;

