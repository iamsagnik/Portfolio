const THICKNESS = 8; // px

const Card = ({ size, index }) => {
  return (
    <div
      className="card-wrapper"
      style={{
        width: size,
        height: size,
        transitionDelay: `${index * 0.002}s`,
      }}
    >
      <div className="card">
        {/* faces */}
        <div className="face front">hello</div>
        <div className="face back">hola</div>

        <div className="face top" />
        <div className="face bottom" />
        <div className="face left" />
        <div className="face right" />

        <div className="corner tl" />
        <div className="corner tr" />
        <div className="corner bl" />
        <div className="corner br" />
      </div>
    </div>
  );
};

export default Card;