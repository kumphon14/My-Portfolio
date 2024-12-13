import { useState } from 'react'
import './App.css'
import './index.css';

import {ReactLenis} from 'lenis/react';

/*
* Component
*/
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  return (
    <ReactLenis root>
      <Header/>
        <main>
          <Hero/>
          <About/>
          <Skill/>
          <Work/>
          <Contact/>
          <Footer/>
        </main>
    </ReactLenis>

  )
}

export default App
