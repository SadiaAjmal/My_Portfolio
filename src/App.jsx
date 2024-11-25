import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

import Contact from "./Components/Contact";
import Process from "./Components/Process";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import DiscussionBlock from "./Components/DiscussionBlock";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Process />

      <DiscussionBlock />
      <Projects />

      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
