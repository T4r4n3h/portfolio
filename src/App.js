import React from 'react';



//components
import Header from './components/Header';
import About from './components/About/About';
import Projects from './components/Projects'
import Contact from './components/Contact';



const App = () => {
  return (
    <div 
    className="container mx-auto  sm:mt-1 md:mt-4">
      <Header />
      <About />
    
      <Projects />
      <Contact />





      </div>
  );
};

export default App;

