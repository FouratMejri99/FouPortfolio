export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center bg-white px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Get In Touch</h2>
      <p className="text-gray-600 mb-6">
        I’m currently open to new opportunities or collaborations. You can reach
        me via LinkedIn, GitHub, Kaggle, email, or phone.
      </p>

      {/* Contact Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
        <a
          href="https://www.linkedin.com/in/fourat-mejri"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-blue-700 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/FouratMejri99"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-gray-900 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.kaggle.com/fouratmejri"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-purple-700 transition"
        >
          Kaggle
        </a>
      </div>

      {/* Contact Details */}
      <div className="space-y-2 text-gray-700">
        <p>
          Email:{" "}
          <a
            href="mailto:fouratmejri97@gmail.com"
            className="text-blue-600 hover:underline"
          >
            fouratmejri97@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+21652610305" className="text-blue-600 hover:underline">
            +216 52 610 305
          </a>
        </p>
      </div>
    </section>
  );
}
