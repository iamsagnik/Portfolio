import Card from "./Card";
import {Link} from "react-router-dom";
import { useCardLayout } from "../../hooks";
import greetings from "../../data/greetings.json";
import { useState, useEffect, useRef} from "react";


function CardGrid() {
  const gap = 0;
  const { cardNumber, cardWidth } = useCardLayout(gap);
  const visibleCard = 4 * cardNumber;

  const [shadowPattern, setShadowPattern] = useState([]);
  const [visibleIndices, setVisibleIndices] = useState([]);
  const [cardContents, setCardContents] = useState([]);
  const cardContentsRef = useRef({});
  const revealTimestampsRef = useRef({});
  const [showButton, setShowButton] = useState(false);

  // Generate shadow pattern once per layout
  useEffect(() => {
    const newPattern = [];
    let lastWas3D = false;

    for (let i = 0; i < visibleCard; i++) {
      let is3D = Math.random() < (lastWas3D ? 0.2 : 0.5);
      newPattern.push(is3D ? 1 : 0);
      lastWas3D = is3D;
    }
    setShadowPattern(newPattern);
  }, [visibleCard]);

  // Initialize all cards and reveal them one-by-one
  useEffect(() => {
    if (cardNumber === 0) return;

    const indices = Array.from({ length: visibleCard }, (_, i) => i);
    const shuffled = [...indices].sort(() => 0.5 - Math.random());

    const uniqueGreetings = [
      { "language": "English", "text": "Hello" },
      { "language": "Bengali", "text": "নমস্কার" },
      { "language": "Hindi", "text": "नमस्ते" }
    ];
    const usedLanguages = new Set(["English", "Bengali", "Hindi"]);

    for(const greeting of greetings){
      if(uniqueGreetings.length === visibleCard) break;

      if(!usedLanguages.has(greeting.language)){
        usedLanguages.add(greeting.language);
        uniqueGreetings.push(greeting);
      }
    }

    console.log("Unique Greetings: ", uniqueGreetings.length);
    console.log("Visible Card: ", visibleCard);

    
    let i = 0;

    const initialContent = Array(visibleCard).fill(null);
    cardContentsRef.current = initialContent;
    setCardContents(initialContent);
    revealTimestampsRef.current = {};
    setVisibleIndices([]);

    const interval = setInterval(() => {
      if (i >= shuffled.length) {
        clearInterval(interval);
        return;
      }

      const idx = shuffled[i];
      const greeting = uniqueGreetings[i];
      cardContentsRef.current[idx] = greeting.text;
      revealTimestampsRef.current[idx] = Date.now();

      setCardContents([...cardContentsRef.current]); // force re-render
      setVisibleIndices((prev) => [...prev, idx]);
      i++;
    }, 200);

    return () => clearInterval(interval);
  }, [cardNumber, visibleCard]);

  // Shuffle visible card content for 3 seconds
useEffect(() => {
  const interval = setInterval(() => {
    const now = Date.now();
    const currentContents = cardContentsRef.current;

    // Step 1: build a Set of all texts currently visible on screen
    const allVisibleTexts = new Set(currentContents.filter(Boolean));

    for (let i = 0; i < currentContents.length; i++) {
      const revealTime = revealTimestampsRef.current[i];

      if (revealTime && now - revealTime < 3000) {
        // Temporarily remove its own content so it can change to it again if needed
        const ownText = currentContents[i];
        allVisibleTexts.delete(ownText);

        const available = greetings
          .map((g) => g.text)
          .filter((text) => !allVisibleTexts.has(text));

        if (available.length > 0) {
          const newText = available[Math.floor(Math.random() * available.length)];
          currentContents[i] = newText;
        }

        // Re-add current content back to visible set
        allVisibleTexts.add(currentContents[i]);
      }
    }

    setCardContents([...currentContents]); // force re-render
  }, 300);

  return () => clearInterval(interval);
}, []); // Notice: empty dependency array



  // Show the final button after all cards are visible
  useEffect(() => {
    if (visibleIndices.length === visibleCard) {
      const timer = setTimeout(() => setShowButton(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [visibleIndices, visibleCard]);

  return (
    <div
      className="grid justify-center gap-0.5"
      style={{
        gridTemplateColumns: `repeat(${cardNumber}, ${cardWidth}px)`,
        gridTemplateRows: `repeat(4, ${cardWidth}px)`,
      }}
    >
      {Array.from({ length: visibleCard }).map((_, index) => {
        const content = cardContents[index];
        return visibleIndices.includes(index) ? (
          <Card
            key={index}
            content={content || "..."}
            cardSide={cardWidth}
            isCloser={shadowPattern[index]}
          />
        ) : (
          <div
            key={index}
            style={{
              width: `${cardWidth}px`,
              height: `${cardWidth}px`,
              backgroundColor: "#3a3a3a",
              opacity: 0.2,
              borderRadius: "0.5rem",
              animation: "pulse 1.2s infinite ease-in-out",
            }}
          />
        );
      })}

      {showButton && (
        <Link 
        to="#/home" 
        className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50" >
            <button
              className="px-6 py-3 text-white rounded-xl text-3xl font-bold transition hover:scale-105 hover:text-[#F4BB44]"
              style={{
                boxShadow: "0 0 10px #BEBEBE",
                backgroundColor: "	#282828",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 15px #FFC000";
                e.currentTarget.textContent = "init()";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 10px #BEBEBE";
                e.currentTarget.textContent = "Hello !!";
              }}
            >
              Hello !!
            </button>
        </Link>
      )}
    </div>
  );
}

export default CardGrid;
