import React from 'react';
import About from './components/About/About';


//components
import Header from './components/Header';


const App = () => {
  return (
    <div className="container mx-auto border border-cyan">
      <Header/>
      <About />
    </div>
  );
};

export default App;

