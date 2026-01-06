"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Code, ExternalLink, Lock } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [showAlert, setShowAlert] = useState(false);

  const projects = [
    {
      title: "Tnker Marketplace – CRM Platform",
      desc: "A CRM marketplace connecting agencies and clients, featuring project management, invoicing, and analytics dashboards with AI-driven recommendations.",
      tech: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Python",
        "Docker",
      ],
      link: "https://crm-marketplace-gamma.vercel.app/login",
      color: "from-purple-500 to-pink-500",
    },

    {
      title: "AI-Shop – Virtual Try-On E-Commerce",
      desc: "An AI-powered e-commerce platform allowing users to virtually try on clothes using deep learning and computer vision for realistic garment simulation.",
      tech: [
        "Vue.js",
        "Go",
        "Python",
        "FastAPI",
        "OpenCV",
        "TensorFlow",
        "PostgreSQL",
        "Docker",
      ],
      link: "https://ai-shop-umber.vercel.app/",
      color: "from-indigo-500 to-purple-500",
    },

    {
      title: "AdminPanel Dashboard – CRM Platform",
      desc: "AdminPanel is a comprehensive CRM dashboard designed to streamline business operations with features like user management, analytics, and reporting tools.",
      tech: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Python",
        "Docker",
      ],
      link: "https://admin-panel-ecru-eight.vercel.app/login",
      color: "from-yellow-500 to-white-500",
    },
  ];

  const handleLinkClick = (link) => {
    if (link === "restricted") {
      setShowAlert(true);
    } else if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      window.location.assign(link);
    }
  };

  return (
    <section id="projects" className="py-24 bg-gray-900 px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
          A collection of projects showcasing my skills and experience in
          full-stack development
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 flex flex-col"
          >
            <div className={`h-2 bg-gradient-to-r ${p.color}`}></div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <Code
                  className={`w-8 h-8 bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}
                />
                {p.link !== "restricted" && (
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                )}
                {p.link === "restricted" && (
                  <Lock className="w-5 h-5 text-gray-400" />
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-300 text-sm mb-6 flex-1 leading-relaxed">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {p.tech.length > 4 && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                    +{p.tech.length - 4}
                  </span>
                )}
              </div>
              <button
                onClick={() => handleLinkClick(p.link)}
                className={`w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${p.color} hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
              >
                {p.link === "restricted" ? (
                  <>
                    <Lock className="w-4 h-4" />
                    Restricted Access
                  </>
                ) : (
                  <>
                    View Project
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom Alert Modal */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50 p-4"
            onClick={() => setShowAlert(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-sm text-center border border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Access Restricted
              </h3>
              <p className="text-gray-300 mb-6">
                You need{" "}
                <span className="font-semibold text-blue-600">
                  Fourat permission
                </span>{" "}
                to view this project.
              </p>
              <button
                onClick={() => setShowAlert(false)}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
