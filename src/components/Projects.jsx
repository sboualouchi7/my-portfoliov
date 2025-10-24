import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Code } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Console B2B de Gestion Financière',
      category: 'fullstack',
      description: 'Plateforme B2B complète pour la gestion financière de top-up avec interface d\'administration multi-rôles, système de workflow d\'approbation des dépôts et cartographie interactive.',
      longDescription: 'Application web sophistiquée développée pour Wafr permettant la gestion complète des transactions financières B2B. Intègre un système cartographique avancé avec Leaflet pour la gestion des zones géographiques, une authentification sécurisée via Firebase, et une interface Material-UI moderne et responsive.',
      technologies: ['React.js', 'Material-UI', 'Leaflet', 'Firebase', 'ADO.NET 9', 'JavaScript ES6+'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      gradient: 'from-cyan-500 to-blue-500',
      features: [
        'Gestion multi-rôles avec permissions granulaires',
        'Workflow d\'approbation des dépôts en temps réel',
        'Cartographie interactive avec édition de polygones',
        'Dashboard analytics avec graphiques en temps réel',
        'Interface responsive et optimisée',
      ],
    },
    {
      id: 2,
      title: 'Système de Gestion Académique',
      category: 'fullstack',
      description: 'Solution complète de digitalisation des processus éducatifs avec APIs REST sécurisées, gestion des étudiants, cours et examens, et interface Angular modulaire.',
      longDescription: 'Plateforme développée pour Assojet permettant la digitalisation complète des processus académiques. Architecture microservices avec Spring Boot, authentification JWT, et interface utilisateur modulaire Angular adaptée aux différents profils utilisateurs.',
      technologies: ['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'Angular 17', 'PostgreSQL', 'MapStruct'],
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop',
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'APIs REST sécurisées avec JWT',
        'Gestion complète étudiants/cours/examens',
        'Modules dédiés par profil utilisateur',
        'Architecture optimisée PostgreSQL',
        'Mapping automatique avec MapStruct',
      ],
    },
    {
      id: 3,
      title: 'Application de Gestion de Billets de Train',
      category: 'desktop',
      description: 'Application desktop de secours pour la gestion manuelle des transactions de billets lors de pannes système avec interface JavaFX intuitive et gestion offline.',
      longDescription: 'Solution de backup développée pour Algo Consulting permettant la continuité des opérations lors de pannes du système principal. Interface JavaFX moderne avec gestion des transactions en mode offline et synchronisation automatique.',
      technologies: ['JavaFX', 'Hibernate', 'HQL', 'Scene Builder'],
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=500&fit=crop',
      gradient: 'from-green-500 to-emerald-500',
      features: [
        'Interface JavaFX responsive et intuitive',
        'Gestion des transactions offline',
        'Persistance avec Hibernate/HQL',
        'Synchronisation automatique des données',
        'Mode secours haute disponibilité',
      ],
    },
    {
      id: 4,
      title: 'Portfolio Personnel Moderne',
      category: 'frontend',
      description: 'Portfolio personnel ultra-moderne avec animations Framer Motion, glassmorphism, et design futuriste. Showcase de compétences et projets avec une expérience utilisateur exceptionnelle.',
      longDescription: 'Portfolio conçu avec les dernières tendances du design web 2024-2025. Intègre des animations fluides, des effets de parallaxe, du glassmorphism, et une palette de couleurs vibrante avec des gradients animés.',
      technologies: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      gradient: 'from-orange-500 to-red-500',
      features: [
        'Animations Framer Motion fluides',
        'Design glassmorphism moderne',
        'Effets parallaxe et particules',
        'Navigation smooth et responsive',
        'Gradients animés et neon glow',
      ],
    },
  ];

  const categories = [
    { id: 'all', name: 'Tous les projets' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'desktop', name: 'Desktop' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-purple-900/20 to-black overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
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
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez mes réalisations et projets qui démontrent mon expertise en développement
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
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-lg'
                  : 'glass text-gray-300 hover:bg-white/10'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative glass rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                    >
                      <Eye className="text-white" size={24} />
                    </motion.button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 rounded-full text-xs text-white border border-white/20`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* View Details */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    <span>Voir détails</span>
                    <ExternalLink size={18} />
                  </motion.button>
                </div>

                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl pointer-events-none`}></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-80 object-cover rounded-t-2xl"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.gradient} opacity-60 rounded-t-2xl`}></div>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.longDescription}</p>

                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-white mb-3">Fonctionnalités clés :</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400">
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-white mb-3">Technologies :</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-4 py-2 bg-gradient-to-r ${selectedProject.gradient} bg-opacity-20 rounded-full text-sm text-white border border-white/20`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(null)}
                    className="w-full py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold rounded-xl"
                  >
                    Fermer
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;

