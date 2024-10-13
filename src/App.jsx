
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

import "./App.css";
import Contact from "./Components/Contact";
import Process from "./Components/Process";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import DiscussionBlock from "./Components/DiscussionBlock";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
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

/**      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />

          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter> */
