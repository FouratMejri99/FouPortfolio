"use client";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Phone, ExternalLink, Star } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/fourat-mejri",
      icon: Linkedin,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-900/20",
    },
    {
      name: "GitHub",
      url: "https://github.com/FouratMejri99",
      icon: Github,
      color: "from-gray-800 to-gray-900",
      bgColor: "bg-gray-800/50",
    },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~0175443912a5f8cd13?mp_source=share",
      icon: Star,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-900/20",
    },
    {
      name: "Kaggle",
      url: "https://www.kaggle.com/fouratmejri",
      icon: ExternalLink,
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-900/20",
    },
  ];

  return (
    <section id="contact" className="py-24 text-center bg-gray-900 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities or collaborations. You can reach
            me via LinkedIn, GitHub, Upwork, Kaggle, email, or phone.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`${social.bgColor} p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-300 font-semibold">{social.name}</span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 max-w-md mx-auto"
        >
          <div className="space-y-4">
            <motion.a
              href="mailto:fouratmejri97@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 p-4 bg-blue-900/20 rounded-xl hover:bg-blue-900/30 transition-colors group"
            >
              <div className="p-2 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-300 font-medium">fouratmejri97@gmail.com</span>
            </motion.a>
            <motion.a
              href="tel:+21652610305"
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 p-4 bg-purple-900/20 rounded-xl hover:bg-purple-900/30 transition-colors group"
            >
              <div className="p-2 bg-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-300 font-medium">+216 52 610 305</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
