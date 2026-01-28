import Card from "./Card";

const GridRenderer = ({ cols, rows, size, gap }) => {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, ${size}px)`,
        gridTemplateRows: `repeat(${rows}, ${size}px)`,
        gap: `${gap}px`,
      }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <Card key={i} size={size} index={i} />
      ))}
    </div>
  );
};

export default GridRenderer;
