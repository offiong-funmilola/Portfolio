import React from 'react';
import Nav from './Components//Nav';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Certifications from './Components/Certifications';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Skills from './Components/Skills';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
