import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'salmanboualouchi@gmail.com',
      link: 'mailto:salmanboualouchi@gmail.com',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '06 52 92 55 40',
      link: 'tel:+212652925540',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Casablanca, Maroc',
      link: null,
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      link: 'https://github.com/Sboualouchi7',
      gradient: 'from-gray-700 to-gray-900',
      username: '@Sboualouchi7',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/salman-boualouchi-b8559b226',
      gradient: 'from-blue-600 to-blue-800',
      username: 'Salman BOUALOUCHI',
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-black overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
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
            Me <span className="gradient-text">Contacter</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Une question, un projet ou juste envie de discuter ? N'hésitez pas à me contacter !
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Restons en <span className="gradient-text">Contact</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
              Je suis toujours ouvert aux nouvelles opportunités, collaborations et projets intéressants.
              N'hésitez pas à me contacter via l'un des moyens ci-dessous.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link || '#'}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`flex flex-col items-center text-center glass rounded-2xl p-8 group hover:bg-white/5 transition-all duration-300 ${
                  info.link ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className={`p-4 bg-gradient-to-br ${info.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="text-white" size={32} />
                </div>
                <p className="text-gray-400 text-sm mb-2">{info.label}</p>
                <p className="text-white font-semibold text-lg">{info.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h4 className="text-2xl font-bold text-white mb-6 text-center">
              Retrouvez-moi sur les <span className="gradient-text">réseaux sociaux</span>
            </h4>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-4 glass rounded-xl px-8 py-6 group hover:bg-white/5 transition-all duration-300"
                >
                  <div className={`p-3 bg-gradient-to-br ${social.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <social.icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-xl">{social.name}</p>
                    <p className="text-gray-400">{social.username}</p>
                  </div>
                  <div className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass rounded-2xl p-8 md:p-12 text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="inline-block mb-6"
            >
              <div className="p-4 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full">
                <MessageCircle className="text-white" size={48} />
              </div>
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prêt à collaborer ?
            </h3>
            <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
              Que ce soit pour un projet, une opportunité professionnelle ou simplement pour échanger,
              je serais ravi d'avoir de vos nouvelles !
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="mailto:salmanboualouchi@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={20} />
                Envoyer un Email
              </motion.a>
              <motion.a
                href="tel:+212652925540"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Phone size={20} />
                Appeler
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-xl py-8 px-6">
            <p className="text-gray-400 mb-2">
              Conçu et développé avec ❤️ par{' '}
              <span className="gradient-text font-semibold">Salman BOUALOUCHI</span>
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Tous droits réservés
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
