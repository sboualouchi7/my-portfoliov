import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Heart, Zap, Award, Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Projets Réalisés', value: '15+', icon: Rocket },
    { label: "Années d'Expérience", value: '3+', icon: Award },
    { label: 'Technologies Maîtrisées', value: '20+', icon: Code2 },
    { label: 'Lignes de Code', value: '50K+', icon: Zap },
  ];

  const traits = [
    {
      icon: Heart,
      title: 'Passionné',
      description: 'Amoureux du code et des nouvelles technologies',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Target,
      title: 'Orienté Résultats',
      description: 'Focus sur la qualité et la performance',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Travail d\'équipe',
      description: 'Excellente communication et collaboration',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovant',
      description: 'Toujours à la recherche de solutions créatives',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
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
            À Propos de <span className="gradient-text">Moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto rounded-full"></div>
        </motion.div>

        {/* Profile Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="glass rounded-2xl p-8 md:p-12">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Développeur Full Stack très motivé, diplômé d'un <span className="text-cyan-400 font-semibold">Master en Technologies de l'Information</span>. 
              Je possède de solides compétences en <span className="text-purple-400 font-semibold">Java/Spring Boot</span>, 
              <span className="text-blue-400 font-semibold"> Angular</span> et 
              <span className="text-cyan-400 font-semibold"> React.js</span> acquises durant ma formation et mes stages.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Spécialisé dans le développement d'<span className="text-purple-400 font-semibold">applications web modernes</span>, 
              j'ai acquis une expérience précieuse dans les secteurs de la grande distribution/FMCG et les solutions B2B. 
              Mon objectif est de créer des solutions digitales innovantes qui apportent une réelle valeur ajoutée.
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-xl p-6 text-center group hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-cyan-500/10 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white" size={24} />
                </div>
              </div>
              <motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5, type: 'spring', stiffness: 200 }}
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Traits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative group"
            >
              <div className="glass rounded-xl p-6 h-full hover:bg-white/5 transition-all duration-300">
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${trait.gradient} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-block p-3 bg-gradient-to-br ${trait.gradient} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <trait.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{trait.title}</h3>
                  <p className="text-gray-400 text-sm">{trait.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border border-white/10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: 'spring' }}
              className="text-6xl text-cyan-400 mb-4"
            >
              "
            </motion.div>
            <p className="text-xl md:text-2xl text-gray-300 italic mb-4">
              Le code est de la poésie, et chaque ligne est une opportunité de créer quelque chose d'extraordinaire.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

