import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Page() {
  return (
    <main className="font-sans">
      <Navbar />
      <Header />

      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
