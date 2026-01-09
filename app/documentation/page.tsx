"use client";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Award, 
  Calendar, 
  Clock, 
  ExternalLink, 
  Tag,
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { articles } from "../data/articles";
import { certifications } from "../data/certifications";

type TabType = "articles" | "certifications";

export default function Documentation() {
  const [activeTab, setActiveTab] = useState<TabType>("articles");

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="font-sans bg-gray-900 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Articles & Certifications
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Explore my technical articles, tutorials, and professional certifications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex bg-gray-800/50 rounded-lg p-1.5 border border-gray-700/50 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab("articles")}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "articles"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <BookOpen className="w-5 h-5" />
                Articles ({articles.length})
              </button>
              <button
                onClick={() => setActiveTab("certifications")}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "certifications"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Award className="w-5 h-5" />
                Certifications ({certifications.length})
              </button>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {activeTab === "articles" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                  <motion.a
                    key={article.id}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-sm"
                  >
                    {article.featured && (
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-4 h-4 text-yellow-400" />
                        <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wide">
                          Featured
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-700/50">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </motion.a>
                ))}
              </div>
            )}

            {activeTab === "certifications" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-5 h-5 text-purple-400" />
                          <span className="text-xs font-semibold text-purple-400 uppercase tracking-wide">
                            {cert.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3">
                          {cert.issuer}
                        </p>
                      </div>
                      {cert.expiryDate && (
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>
                          Issued: {new Date(cert.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </span>
                      </div>
                      {cert.expiryDate && (
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>
                            Expires: {new Date(cert.expiryDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-gray-400">
                        <Tag className="w-4 h-4" />
                        <span className="font-mono text-xs">ID: {cert.credentialId}</span>
                      </div>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors group/link"
                    >
                      Verify Certificate
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Empty State */}
          {activeTab === "articles" && articles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <BookOpen className="w-16 h-16 text-gray-700 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No articles available yet.</p>
            </motion.div>
          )}

          {activeTab === "certifications" && certifications.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Award className="w-16 h-16 text-gray-700 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No certifications available yet.</p>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
