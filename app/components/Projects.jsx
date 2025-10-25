export default function Projects() {
  const projects = [
    {
      title: "Tnker Marketplace – CRM Platform",
      desc: "A CRM marketplace connecting agencies and clients, featuring project management, invoicing, and analytics dashboards with AI-driven recommendations.",
      tech: "Next.js, NestJS, TypeScript, Tailwind CSS, PostgreSQL, Python, Docker",
      link: "#",
    },
    {
      title: "Vibo – Streaming Platform for Gamers",
      desc: "A real-time streaming platform enabling gamers to broadcast live, interact with viewers, and receive donations through secure APIs and WebRTC.",
      tech: "React, Vite, Node.js, Express, MongoDB, WebRTC, Socket.io, Docker, Nginx",
      link: "#",
    },
    {
      title: "AI-Shop – Virtual Try-On E-Commerce",
      desc: "An AI-powered e-commerce platform allowing users to virtually try on clothes using deep learning and computer vision for realistic garment simulation.",
      tech: "Vue.js, Go (Gin/Fiber), Python, FastAPI, OpenCV, TensorFlow, PostgreSQL, Docker",
      link: "#",
    },
    {
      title: "Pharmacy Management System",
      desc: "A full-stack application for managing medicines, prescriptions, and inventory with secure role-based access and JWT authentication.",
      tech: "Spring Boot, Angular, PostgreSQL, Hibernate, Docker, RxJS",
      link: "#",
    },
    {
      title: "Employee Management System",
      desc: "A web app to manage employee records, attendance, and payroll with secure REST APIs and responsive dashboard.",
      tech: "Spring Boot, Angular, MySQL, JWT, Docker",
      link: "#",
    },
    {
      title: "Data Analytics Dashboard",
      desc: "Python-based web dashboard to visualize business data, generate reports, and track KPIs in real-time.",
      tech: "Python, Flask, Pandas, Plotly, PostgreSQL, Docker",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 px-6">
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
              <a
                href={p.link}
                className="text-sm font-medium text-blue-600 hover:text-blue-800 transition"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
