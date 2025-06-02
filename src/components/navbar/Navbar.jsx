import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId); // track current section
    navigate(`/home#${sectionId}`);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'about', 'contact'];
      for (let id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight / 2 &&
                         rect.bottom >= window.innerHeight / 3;
        if (isInView) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavClass = (id) =>
    `block py-2 px-4 duration-200 rounded-3xl ${
      activeSection === id
        ? 'bg-[#FFC000] text-[#282828]'
        : 'text-[#B8B8B8] hover:text-[#FFC000] hover:bg-[#3a3a3a]'
    }`;

  return (
    <header className="sticky z-50 top-0 user-select-none">
      <div className="flex flex-grow justify-between items-center">
        <nav className="px-4 mt-2 py-2 mx-auto bg-[#282828] rounded-4xl">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6 font-bold text-sm sm:text-md text-center">
            <li>
              <button onClick={(e) => handleNavClick(e, 'hero')} className={getNavClass('hero')}>
                Home
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick(e, 'projects')} className={getNavClass('projects')}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick(e, 'about')} className={getNavClass('about')}>
                About
              </button>
            </li>
            <li>
              <button onClick={(e) => handleNavClick(e, 'contact')} className={getNavClass('contact')}>
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
