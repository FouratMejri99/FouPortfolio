export default function About() {
  return (
    <section id="about" className="py-24 bg-white text-center px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">About Me</h2>

      <div className="max-w-5xl mx-auto text-gray-600 space-y-6 leading-relaxed">
        <p>
          Im <span className="font-semibold text-gray-800">Fourat Mejri</span>,
          a passionate{" "}
          <span className="text-blue-600 font-medium">Software Engineer</span>{" "}
          based in Tunis, Tunisia. I specialize in{" "}
          <span className="font-medium">full-stack web development</span>,
          building scalable, secure, and high-performing applications across a
          variety of modern tech stacks.
        </p>

        <p>
          I thrive on turning complex problems into elegant, efficient
          solutions. My experience spans front-end, back-end, DevOps, and cloud
          technologies, giving me a holistic understanding of software
          engineering and product lifecycle management.
        </p>

        <p>
          Over the past few years, I’ve contributed to several impactful
          projects — from developing a{" "}
          <span className="font-semibold">CRM marketplace for agencies</span> at{" "}
          <span className="font-medium">Tnker</span>, to building a{" "}
          <span className="font-semibold">
            real-time streaming platform (Vibo)
          </span>{" "}
          for gamers, and an{" "}
          <span className="font-semibold">
            AI-powered e-commerce app (AI-Shop)
          </span>{" "}
          with virtual try-on capabilities.
        </p>

        <p>
          I’ve collaborated with clients internationally as a{" "}
          <span className="font-medium">freelance full-stack developer</span>,
          delivering custom web apps and APIs using technologies like{" "}
          <span className="font-semibold">
            React, Next.js, NestJS, Node.js, and Docker
          </span>
          . My background also includes experience with{" "}
          <span className="font-semibold">
            Spring Boot, Angular, Vue.js, Go, and Python
          </span>
          .
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              ⚙️ Technical Expertise
            </h3>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>
                <span className="font-medium">Frontend:</span> React (Hooks,
                Context, Next.js), React Native, Angular 15+, Vue.js,
                TypeScript, Tailwind CSS, HTML5, CSS3, Sass/Less, Ionic
              </li>
              <li>
                <span className="font-medium">Backend:</span> Node.js, NestJS,
                Spring Boot (Java), Python (Flask, FastAPI), Laravel, Symfony,
                Express.js
              </li>
              <li>
                <span className="font-medium">Databases:</span> PostgreSQL,
                MongoDB, MySQL, Firebase, Oracle, Redis, Elasticsearch
              </li>
              <li>
                <span className="font-medium">DevOps & Cloud:</span> Docker,
                Kubernetes, GitHub Actions, Jenkins, AWS, GCP, Microsoft Azure
              </li>
              <li>
                <span className="font-medium">Testing & QA:</span> Jest,
                Cypress, Mocha, Chai, Unit Testing, Integration Testing
              </li>
              <li>
                <span className="font-medium">Blockchain & Web3:</span> Smart
                Contracts, Solidity, Ethereum, Web3.js, NFT Development
              </li>
              <li>
                <span className="font-medium">Other Tools & Skills:</span> REST
                APIs, JWT, Nginx, PM2, Sentry, Agile (Scrum & Kanban), System
                Design, Figma, Storybook, Angular Material
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              💼 Professional Experience
            </h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <span className="font-medium">
                  Software Engineer – Tnker (2024–2025)
                </span>
                : Full-stack React + NestJS CRM system with CI/CD.
              </li>
              <li>
                <span className="font-medium">
                  Freelance Developer (2023–Present)
                </span>
                : Remote projects on Upwork/Fiverr using Next.js, Node.js, and
                Docker.
              </li>
              <li>
                <span className="font-medium">Intern – J’inspire Group</span>:
                Spring Boot + Angular medicine management system.
              </li>
              <li>
                <span className="font-medium">Intern – OACA</span>: React +
                Symfony app for airport baggage tracking.
              </li>
              <li>
                <span className="font-medium">Intern – CERT</span>: Spring Boot
                + Angular app for 4G service quality analysis.
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10">
          Beyond coding, I enjoy exploring new technologies, contributing to
          open-source projects, and continuously improving my skills through
          learning and experimentation.
        </p>

        <p>
          I’m currently open to new opportunities — whether full-time,
          freelance, or collaborative projects. Feel free to{" "}
          <a
            href="#contact"
            className="text-blue-600 font-medium hover:underline"
          >
            get in touch
          </a>
          !
        </p>
      </div>
    </section>
  );
}
