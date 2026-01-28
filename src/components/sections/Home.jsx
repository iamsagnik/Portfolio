import PreLoader from "../preloader/PreLoader.jsx";
import { useState, useEffect } from "react";

function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Fake load for demo
    const t = setTimeout(() => setShowLoader(false), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full h-full">
      {showLoader ? <PreLoader /> : <MainHomeContent />}
    </div>
  );
}

function MainHomeContent() {
  return (
    <div>
      {/* Your actual hero, sections, game, whatever */}
      Home content loaded.
    </div>
  );
}

export default Home;