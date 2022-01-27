import React from 'react';
import About from './components/About/About';
import Projects from './components/Projects'

//components
import Header from './components/Header';


const App = () => {
  return (
    <div className="container mx-auto">
      <Header/>      
      <About />
      <Projects/>
   
    </div>
  );
};

export default App;

