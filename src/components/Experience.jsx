import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Développeur Full Stack React.js & .NET',
      company: 'Wafr',
      location: 'Casablanca',
      period: 'Mai 2025 - Présent',
      type: 'Stage',
      description: 'Développement d\'une console B2B de gestion financière pour plateforme de top-up management',
      achievements: [
        'Interface d\'administration React.js/Material-UI avec gestion multi-rôles et workflow d\'approbation des dépôts',
        'Système cartographique Leaflet pour zones géographiques avec édition de polygones temps réel',
        'Authentification Firebase, intégration APIs REST et interface responsive optimisée',
      ],
      technologies: ['React.js', 'Material-UI', 'Leaflet', 'Firebase', 'ADO.NET 9', 'JavaScript ES6+'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Développeur Full Stack Java & Angular',
      company: 'Assojet',
      location: 'Khemissat',
      period: 'Février 2025 - Mai 2025',
      type: 'Stage',
      description: 'Conception et développement d\'un système intégré de gestion académique pour la digitalisation des processus éducatifs',
      achievements: [
        'Développement d\'APIs REST sécurisées avec Spring Boot et authentification JWT pour la gestion des étudiants, cours et examens',
        'Interface utilisateur dynamique Angular avec modules dédiés aux différents profils (étudiants, enseignants, administration)',
        'Architecture de données optimisée PostgreSQL avec Spring Data JPA et mapping automatique MapStruct',
      ],
      technologies: ['Java 17', 'Spring Boot 3.2.4', 'Spring Security', 'JWT', 'Angular 17', 'PostgreSQL', 'MapStruct', 'Maven'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Développeur Applications Desktop',
      company: 'Algo Consulting',
      location: 'Rabat',
      period: 'Avril 2023 - Juin 2023',
      type: 'Stage',
      description: 'Développement d\'une application desktop de secours pour la gestion manuelle des transactions de billets de train lors de pannes système',
      achievements: [
        'Conception et développement d\'une interface JavaFX intuitive et responsive',
        'Implémentation de la couche de persistance avec Hibernate et HQL',
        'Gestion des transactions et intégrité des données en mode offline',
      ],
      technologies: ['JavaFX', 'Hibernate', 'HQL', 'Scene Builder'],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="relative py-20 bg-black overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
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
            Mon <span className="gradient-text">Expérience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Parcours professionnel et réalisations dans le développement Full Stack
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#667eea] via-[#764ba2] to-[#f093fb]"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full border-4 border-black z-10"></div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-[calc(100%-3rem)] glass rounded-2xl p-6 md:p-8 group hover:bg-white/5 transition-all duration-300 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}
                >
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 bg-gradient-to-br ${exp.gradient} rounded-lg`}>
                          <Briefcase className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                          <p className="text-cyan-400 font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      <span className="px-4 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm text-purple-300 border border-purple-500/30">
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-cyan-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle size={18} className="text-green-400" />
                        Réalisations clés :
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-2 text-gray-400"
                          >
                            <span className="text-cyan-400 mt-1">▹</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies utilisées :</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                            className={`px-3 py-1 bg-gradient-to-r ${exp.gradient} bg-opacity-20 rounded-full text-sm text-white border border-white/20`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

