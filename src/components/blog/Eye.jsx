import React from "react";

const Eye = ({ x, y }) => {
  return (
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
      <div
        className="w-4 h-4 bg-black rounded-full"
        style={{ transform: `translate(${x}px, ${y}px)` }}
      />
    </div>
  );
};

export default Eye;