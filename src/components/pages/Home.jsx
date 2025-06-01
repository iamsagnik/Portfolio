import {Navbar, ClickSpark} from '../components'
import {Hero, Projects, About, Contact} from './index'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
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
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
    </ClickSpark>
  )
}

export default Home