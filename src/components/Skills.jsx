import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Wrench, Terminal, Layers } from 'lucide-react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous', icon: Layers },
    { id: 'languages', name: 'Langages', icon: Terminal },
    { id: 'backend', name: 'Backend', icon: Database },
    { id: 'frontend', name: 'Frontend', icon: Code2 },
    { id: 'database', name: 'Bases de données', icon: Database },
    { id: 'devops', name: 'DevOps & Cloud', icon: Cloud },
    { id: 'tools', name: 'Outils', icon: Wrench },
  ];

  const skills = [
    // Languages
    { name: 'Java 11/17', level: 95, category: 'languages', color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript ES6+', level: 90, category: 'languages', color: 'from-yellow-500 to-orange-500' },
    { name: 'TypeScript', level: 88, category: 'languages', color: 'from-blue-500 to-cyan-500' },
    { name: 'C#', level: 75, category: 'languages', color: 'from-purple-500 to-pink-500' },

    // Backend
    { name: 'Spring Boot 3.2.4', level: 92, category: 'backend', color: 'from-green-500 to-emerald-500' },
    { name: 'Spring Security & JWT', level: 88, category: 'backend', color: 'from-green-600 to-teal-500' },
    { name: 'Hibernate & JPA', level: 90, category: 'backend', color: 'from-yellow-600 to-orange-600' },
    { name: 'GraphQL', level: 75, category: 'backend', color: 'from-pink-500 to-rose-500' },
    { name: 'ADO.NET 9', level: 80, category: 'backend', color: 'from-purple-600 to-indigo-600' },

    // Frontend
    { name: 'React.js', level: 90, category: 'frontend', color: 'from-cyan-500 to-blue-500' },
    { name: 'Angular 17', level: 88, category: 'frontend', color: 'from-red-500 to-pink-500' },
    { name: 'HTML5 & CSS3', level: 95, category: 'frontend', color: 'from-orange-500 to-red-500' },
    { name: 'Material-UI', level: 85, category: 'frontend', color: 'from-blue-600 to-indigo-500' },
    { name: 'Tailwind CSS', level: 88, category: 'frontend', color: 'from-cyan-400 to-blue-400' },

    // Database
    { name: 'PostgreSQL', level: 90, category: 'database', color: 'from-blue-600 to-indigo-600' },
    { name: 'MySQL', level: 85, category: 'database', color: 'from-blue-500 to-cyan-500' },
    { name: 'MongoDB', level: 80, category: 'database', color: 'from-green-500 to-emerald-600' },

    // DevOps
    { name: 'Docker', level: 82, category: 'devops', color: 'from-blue-500 to-cyan-600' },
    { name: 'Git & GitHub', level: 92, category: 'devops', color: 'from-gray-700 to-gray-900' },
    { name: 'Jenkins', level: 70, category: 'devops', color: 'from-red-600 to-orange-600' },
    { name: 'Azure', level: 75, category: 'devops', color: 'from-blue-600 to-indigo-700' },

    // Tools
    { name: 'Leaflet', level: 85, category: 'tools', color: 'from-green-500 to-teal-500' },
    { name: 'Firebase', level: 80, category: 'tools', color: 'from-yellow-500 to-orange-500' },
    { name: 'MapStruct', level: 82, category: 'tools', color: 'from-purple-500 to-pink-500' },
    { name: 'Maven', level: 88, category: 'tools', color: 'from-red-500 to-pink-600' },
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-black to-purple-900/20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Une expertise complète en développement Full Stack avec des technologies modernes et performantes
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-lg'
                  : 'glass text-gray-300 hover:bg-white/10'
              }`}
            >
              <category.icon size={18} />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-xl p-6 group hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>
              
              {/* Progress bar container */}
              <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                {/* Animated progress bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                >
                  {/* Shine effect */}
                  <motion.div
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.div>
                
                {/* Glow effect on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-4xl mb-2">💻</div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Full Stack</h3>
            <p className="text-gray-400">Maîtrise complète du développement web</p>
          </div>

          <div className="glass rounded-xl p-6 text-center">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Performance</h3>
            <p className="text-gray-400">Code optimisé et scalable</p>
          </div>

          <div className="glass rounded-xl p-6 text-center">
            <div className="text-4xl mb-2">🎨</div>
            <h3 className="text-2xl font-bold gradient-text mb-2">UI/UX</h3>
            <p className="text-gray-400">Interfaces modernes et intuitives</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

