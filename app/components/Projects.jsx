"use client";
import { useState } from "react";

export default function Projects() {
  const [showAlert, setShowAlert] = useState(false);

  const projects = [
    {
      title: "Advisor Management System",
      desc: "A full-stack application for managing energy label advisors client base with secure role-based access and JWT authentication.",
      tech: "NexJs,Jest,JWT,docker,Supabase,Redux,Nginx",
      link: "https://ahlalabei-q7bh.vercel.app/",
    },
    {
      title: "Tnker Marketplace – CRM Platform",
      desc: "A CRM marketplace connecting agencies and clients, featuring project management, invoicing, and analytics dashboards with AI-driven recommendations.",
      tech: "Next.js, NestJS, TypeScript, Tailwind CSS, PostgreSQL, Python, Docker",
      link: "https://crm-marketplace-gamma.vercel.app/login",
    },
    {
      title: "Vibo – Streaming Platform for Gamers",
      desc: "A real-time streaming platform enabling gamers to broadcast live, interact with viewers, and receive donations through secure APIs and WebRTC.",
      tech: "React, Vite, Node.js, Express, MongoDB, WebRTC, Socket.io, Docker, Nginx",
      link: "https://vibo-silk.vercel.app/",
    },
    {
      title: "Employee Management System",
      desc: "A web app to manage employee records, attendance, and payroll with secure REST APIs and responsive dashboard.",
      tech: "Spring Boot, Angular, MySQL, JWT, Docker",
      link: "restricted",
    },
    {
      title: "AI-Shop – Virtual Try-On E-Commerce",
      desc: "An AI-powered e-commerce platform allowing users to virtually try on clothes using deep learning and computer vision for realistic garment simulation.",
      tech: "Vue.js, Go (Gin/Fiber), Python, FastAPI, OpenCV, TensorFlow, PostgreSQL, Docker",
      link: "https://ai-shop-umber.vercel.app/",
    },
    {
      title: "Data Analytics Dashboard",
      desc: "Python-based web dashboard to visualize business data, generate reports, and track KPIs in real-time.",
      tech: "Python, Flask, Pandas, Plotly, PostgreSQL, Docker",
      link: "restricted",
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
    <section id="projects" className="py-24 bg-gray-50 px-6 relative">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md text-left flex flex-col justify-between h-full"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {p.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
              <p className="text-sm text-blue-600 font-medium">{p.tech}</p>
            </div>
            <div className="border-t border-gray-100 p-4 flex justify-end">
              <button
                onClick={() => handleLinkClick(p.link)}
                className="text-sm font-medium text-blue-600 hover:text-blue-800 transition"
              >
                View Project →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Alert Modal */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm text-center">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Access Restricted
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              You need{" "}
              <span className="font-semibold text-blue-600">
                Fourat’s permission
              </span>{" "}
              to view this project.
            </p>
            <button
              onClick={() => setShowAlert(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
