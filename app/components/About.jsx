"use client";
import { motion } from "framer-motion";
import { Code2, Briefcase, Rocket, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900 text-center px-6 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 space-y-6 leading-relaxed mb-12"
        >
          <p className="text-lg">
            I'm <span className="font-semibold text-white">Fourat Mejri</span>,
            a passionate{" "}
            <span className="text-blue-400 font-semibold">Software Engineer</span>{" "}
            based in Tunis, Tunisia. I specialize in{" "}
            <span className="font-semibold text-white">full-stack web development</span>,
            building scalable, secure, and high-performing applications across a
            variety of modern tech stacks.
          </p>

          <p className="text-lg">
            I thrive on turning complex problems into elegant, efficient
            solutions. My experience spans front-end, back-end, DevOps, and cloud
            technologies, giving me a holistic understanding of software
            engineering and product lifecycle management.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Technical Expertise
              </h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><span className="font-semibold">Frontend:</span> React (Hooks, Context, Next.js), React Native, Angular 15+, Vue.js, TypeScript, Tailwind CSS, HTML5, CSS3, Sass/Less, Ionic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><span className="font-semibold">Backend:</span> Node.js, NestJS, Spring Boot (Java), Python (Flask, FastAPI), Laravel, Symfony, Express.js</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><span className="font-semibold">Databases:</span> PostgreSQL, MongoDB, MySQL, Firebase, Oracle, Redis, Elasticsearch</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><span className="font-semibold">DevOps & Cloud:</span> Docker, Kubernetes, GitHub Actions, Jenkins, AWS, GCP, Microsoft Azure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><span className="font-semibold">Testing & QA:</span> Jest, Cypress, Mocha, Chai, Unit Testing, Integration Testing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><span className="font-semibold">Blockchain & Web3:</span> Smart Contracts, Solidity, Ethereum, Web3.js, NFT Development</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-600 rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Professional Experience
              </h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-2">
                <Rocket className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Software Engineer – Tnker (2024–2025)</span>
                  <p className="text-sm text-gray-400">Full-stack React + NestJS CRM system with CI/CD.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Rocket className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Freelance Developer (2023–Present)</span>
                  <p className="text-sm text-gray-400">Remote projects on Upwork/Fiverr using Next.js, Node.js, and Docker.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Intern – J'inspire Group</span>
                  <p className="text-sm text-gray-400">Spring Boot + Angular medicine management system.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Intern – OACA</span>
                  <p className="text-sm text-gray-400">React + Symfony app for airport baggage tracking.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Intern – CERT</span>
                  <p className="text-sm text-gray-400">Spring Boot + Angular app for 4G service quality analysis.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-gray-300 space-y-4"
        >
          <p className="text-lg">
            Beyond coding, I enjoy exploring new technologies, contributing to
            open-source projects, and continuously improving my skills through
            learning and experimentation.
          </p>
          <p className="text-lg">
            I'm currently open to new opportunities — whether full-time,
            freelance, or collaborative projects. Feel free to{" "}
            <a
              href="#contact"
              className="text-blue-400 font-semibold hover:text-purple-400 hover:underline transition-colors"
            >
              get in touch
            </a>
            !
          </p>
        </motion.div>
      </div>
    </section>
  );
}
