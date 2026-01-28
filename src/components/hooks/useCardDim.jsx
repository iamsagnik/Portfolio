import { useEffect, useState } from "react";

const GAP = 6;

const useCardDim = (ref) => {
  const [grid, setGrid] = useState({
    cols: 0,
    rows: 0,
    size: 0,
    gap: GAP,
  });

  useEffect(() => {
    if (!ref.current) return;

    const calculateGrid = () => {
      const { width, height } = ref.current.getBoundingClientRect();

      let targetSize = 120;
      if (width < 600) targetSize = 45;
      else if (width < 1024) targetSize = 55;

      const cols = Math.floor(width / targetSize);

      const size = (width - GAP * (cols - 1)) / cols;

      const rows = Math.floor(
        (height + GAP) / (size + GAP)
      );

      setGrid({ cols, rows, size, gap: GAP });
    };

    calculateGrid();

    const observer = new ResizeObserver(calculateGrid);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return grid;
};

export default useCardDim;