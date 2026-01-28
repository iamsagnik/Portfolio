import { useRef } from "react";
import useCardDim from "../hooks/useCardDim";
import GridRenderer from "./gridRenderer";
import "./preloader.css";

const PreLoader = () => {
  const fieldRef = useRef(null);
  const grid = useCardDim(fieldRef);

  return (
    <div className="preloader">
      <div className="field" ref={fieldRef}>
        {grid.cols > 0 && grid.rows > 0 && (
          <GridRenderer {...grid} />
        )}
      </div>
    </div>
  );
};


export default PreLoader;
