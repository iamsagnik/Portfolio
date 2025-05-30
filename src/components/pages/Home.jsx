import {Navbar, Hero, Projects, About, Contact, ClickSpark} from '../index'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Home() {

  const location = useLocation();

  useEffect(() => {
    const routeHash = location.hash.split('#')[2] || '';
    
    if (routeHash) {
      const element = document.getElementById(routeHash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
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