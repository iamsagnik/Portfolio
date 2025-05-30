import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CustomNav({ to, children }) {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract section ID (e.g., "hero" from "/home#hero")
  const sectionId = to.split('#')[1];

  // Handle scroll-based active state
  useEffect(() => {
    if (!sectionId) return;
    
    const handleScroll = () => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInView = (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 3
      );

      setActive(isInView);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionId, location.hash]);

  // Handle navigation
  const handleClick = (e) => {
    e.preventDefault();
    
    if (location.pathname === '/home') {
      // Already on home page - scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Update URL hash without reload
        window.history.replaceState(null, '', `#${sectionId}`);
      }
    } else {
      // Navigate to home page with hash
      navigate(`/home#${sectionId}`);
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`block py-2 px-4 duration-200 rounded-3xl ${
        active
          ? "bg-[#FFC000] text-[#282828]"
          : "text-[#B8B8B8] hover:text-[#FFC000] hover:bg-[#3a3a3a]"
      }`}
    >
      {children}
    </a>
  );
}

export default CustomNav;