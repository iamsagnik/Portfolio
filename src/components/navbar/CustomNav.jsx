import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CustomNav({ to, children }) {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract base path and section ID
  const [basePath, sectionId] = to.split('#');
  
  // Handle scroll-based active state
  useEffect(() => {
    if (location.pathname !== basePath) {
      setActive(false);
      return;
    }
    
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
  }, [location.pathname, basePath, sectionId]);

  // Handle navigation and scrolling
  const handleClick = (e) => {
    e.preventDefault();
    
    // Case 1: Already on the target page - scroll to section
    if (location.pathname === basePath && sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Update URL without triggering reload
        window.history.replaceState(null, '', `#${sectionId}`);
      }
    }
    // Case 2: Need to navigate to different page
    else {
      navigate(to);
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