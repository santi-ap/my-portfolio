import React from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import developerData from './data.json';

function App() {
  return (
    <div id="app" >
      <Navbar devData={developerData}/>
      <Header devData={developerData}/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Education/>
      <Footer/>
    </div>
  );
}

export default App;
