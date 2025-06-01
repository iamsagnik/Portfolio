import { ArrowDown, Github, Linkedin } from 'lucide-react';
import {Link} from 'react-router-dom';
import {SplitText, InteractiveParticleNetwork} from '../components';


function HeroSection() {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContacts = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pt-16">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center ">
          <div className="text-center md:text-left">
            <span className="text-[#FFC000] font-semibold text-lg block mb-1">Hi, I&apos;m</span>
              <SplitText
                text="SAGNIK MITRA" 
                className="text-5xl font-bold text-white"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            <p className="text-lg text-muted-foreground text-[#B8B8B8] mb-6">
              CSE Student • Software Engineer • Based in Cooch Behar, India
            </p>

            <p className="text-xl text-[#FFC000] md:text-2xl mb-6">
              Crafting ideas at the intersection of logic, art, and life.
            </p>

            <p className="text-sm text-[#6B9797] mb-8 max-w-xl mx-auto md:mx-0">
              Each node tells a story. Hover to explore my passions. ➤
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#FFC000] hover:bg-[#FFC000]/90 group text-[#14181f] font-semibold px-6 py-3 rounded-lg transition-colors">
                <Link to="#projects" onClick={handleScrollToProjects} className="flex items-center justify-center">
                  View Projects <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </Link>
              </button>
              <button className="border-[#FFC000] border-2 text-[#FFC000] bg-transparent hover:bg-[#FFC000]/10 hover:text-[#F5F5F5] font-semibold px-6 py-3 rounded-lg">
                <Link to="#contact" onClick={handleScrollToContacts}>
                  Get in Touch
                </Link>
              </button>
            </div>

            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <a href="https://github.com/iamsagnik" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#6B9797] hover:text-[#FFC000]">
                <Github className="h-7 w-7" />
              </a>
              <a href="https://www.linkedin.com/in/sagnik-mitra10/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#6B9797] hover:text-[#FFC000]">
                <Linkedin className="h-7 w-7" />
              </a>
            </div>
          </div>

          <div className="relative group animate-fade-in flex justify-center items-center w-full h-[28rem] md:h-[36rem]">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl group-hover:scale-105 transition-transform duration-500 opacity-30"></div>
            <InteractiveParticleNetwork />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;