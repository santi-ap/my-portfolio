import React from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div id="app" >
      <Header/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Education/>
      <Footer/>
    </div>
  );
}

export default App;
