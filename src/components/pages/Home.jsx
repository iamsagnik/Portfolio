import {Navbar, Hero, Projects, About, Contact, ClickSpark} from '../index'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Home() {

const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Small timeout to ensure page is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
      <ClickSpark
        sparkColor='#FFCC00'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="bg-[#303030]">
          <Navbar />
          <section id="hero">
            <Hero />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
    </ClickSpark>
  )
}

export default Home