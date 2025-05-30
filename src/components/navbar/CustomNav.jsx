import { useEffect, useState } from 'react';

function CustomNav({ to, children }) {
  const [active, setActive] = useState(false);
  const sectionId = to.split('#')[1]; 

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

      if (inView) {
        setActive(true);

        const currentHash = window.location.hash;
        if (currentHash !== `#${sectionId}`) {
          history.replaceState(null, '', `#${sectionId}`);
        }
      } else {
        setActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionId]);

  const handleClick = (e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', `#${sectionId}`);
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
