import React from 'react';
import About from './components/About/About';
import Projects from './components/Projects'

//components
import Header from './components/Header';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <About />
      <Projects />
      <Contact />


      </div>
  );
};

export default App;

