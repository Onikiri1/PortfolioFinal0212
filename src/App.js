import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';



import './App.css';

function App() {
  return (
    <>
    <Sidebar/>
    <main className='main'>
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Portfolio/>
      <Contact/>
      </main>
    </>
  );
}

export default App;
