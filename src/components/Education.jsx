import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master en Systèmes d\'Information',
      school: 'École supérieure d\'ingénierie informatique et réseaux télécoms Vinci',
      location: 'Rabat',
      period: '2020 - 2025',
      description: 'Formation d\'excellence en technologies de l\'information avec spécialisation en développement Full Stack et architecture logicielle.',
      highlights: [
        'Développement d\'applications web et mobiles',
        'Architecture et conception de systèmes',
        'Bases de données et Big Data',
        'DevOps et Cloud Computing',
        'Gestion de projets informatiques',
      ],
      icon: GraduationCap,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      degree: 'Baccalauréat Sciences Mathématiques',
      school: 'Lycée Mohamed 5',
      location: 'Tan Tan',
      period: '2020',
      description: 'Diplôme du baccalauréat avec mention en sciences mathématiques, développant des compétences analytiques et de résolution de problèmes.',
      highlights: [
        'Mathématiques avancées',
        'Physique et chimie',
        'Sciences de l\'ingénieur',
        'Logique et algorithmique',
      ],
      icon: Award,
      gradient: 'from-cyan-500 to-blue-500',
    },
  ];

  const languages = [
    { name: 'Arabe', level: 'Maternelle', percentage: 100, color: 'from-green-500 to-emerald-500' },
    { name: 'Français', level: 'Courant', percentage: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Anglais', level: 'Technique', percentage: 75, color: 'from-purple-500 to-pink-500' },
    { name: 'Espagnol', level: 'Débutant', percentage: 40, color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="education" className="relative py-20 bg-gradient-to-b from-black to-purple-900/20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
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
            Formation & <span className="gradient-text">Langues</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Parcours académique et compétences linguistiques
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="glass rounded-2xl p-8 group hover:bg-white/5 transition-all duration-300 relative"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-block p-4 bg-gradient-to-br ${edu.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <edu.icon className="text-white" size={32} />
                </div>

                {/* Degree */}
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-cyan-400 font-semibold text-lg mb-4">{edu.school}</p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-cyan-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>

                {/* Highlights */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <BookOpen size={18} className="text-purple-400" />
                    Points clés :
                  </h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2 text-gray-400"
                      >
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Compétences <span className="gradient-text">Linguistiques</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-semibold text-white">{lang.name}</h4>
                  <span className="text-cyan-400 font-medium">{lang.level}</span>
                </div>

                {/* Progress bar */}
                <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${lang.color} rounded-full relative`}
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications or additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="glass rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300">
            <div className="text-4xl mb-3">🎓</div>
            <h4 className="text-xl font-bold gradient-text mb-2">Formation Continue</h4>
            <p className="text-gray-400 text-sm">Veille technologique constante</p>
          </div>

          <div className="glass rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300">
            <div className="text-4xl mb-3">📚</div>
            <h4 className="text-xl font-bold gradient-text mb-2">Auto-formation</h4>
            <p className="text-gray-400 text-sm">Apprentissage autonome et passionné</p>
          </div>

          <div className="glass rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300">
            <div className="text-4xl mb-3">🌍</div>
            <h4 className="text-xl font-bold gradient-text mb-2">Multilingue</h4>
            <p className="text-gray-400 text-sm">Communication internationale</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

