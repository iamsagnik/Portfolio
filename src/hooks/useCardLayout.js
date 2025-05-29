import { useEffect, useState } from 'react';

function useCardLayout() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [cardNumber, setCardNumber] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {

    const handleResize = () => setScreenWidth(window.innerWidth);

    const findCardNumber = () => {
      const maxCol = 10;
      let finalCol = maxCol;
      let cardW = 0;

      for (let col = 1; col <= maxCol; col++) {

        cardW = screenWidth / col;

        if (cardW < 200) {
          finalCol = col;
          break;
        }
      }

      cardW = screenWidth / finalCol;

      setCardNumber(finalCol);
      setCardWidth(cardW);
    }

    window.addEventListener('resize', handleResize);
    findCardNumber();

    return () => window.removeEventListener('resize', handleResize);
  }, [screenWidth]);

  return {cardNumber, cardWidth};
 
}

export default useCardLayout;