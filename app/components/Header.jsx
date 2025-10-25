"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* 👇 Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
          <Image
            src="/me.png" // 👉 place your photo in /public/me.jpg
            alt="Fourat Mejri"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* 👇 Name and Intro */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-800"
      >
        Hi, Im <span className="text-blue-600">Fourat Mejri</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-lg text-gray-600 max-w-2xl"
      >
        A passionate Software Engineer specializing in full-stack development,
        crafting clean and scalable digital experiences.
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-blue-700 transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}
