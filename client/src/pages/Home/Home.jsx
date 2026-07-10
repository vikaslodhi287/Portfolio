import Navbar from "../../components/layout/Navbar";
import Hero from "../../sections/Hero";
import About from "../../sections/About";
import Skills from "../../sections/Skills";
import Projects from "../../sections/Projects";
import Experience from "../../sections/Experience";
import Education from "../../sections/Education";
import Certificates from "../../sections/Certificates";
import Contact from "../../sections/Contact";
import Footer from "../../sections/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
      <Footer/>
    </>
  );
}

export default Home;