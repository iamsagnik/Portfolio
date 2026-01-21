import React from "react";

const SpeechCloud = ({ text, position = "left" }) => {
  return (
    <div
      className={`absolute ${
        position === "left" ? "left-0" : "right-0"
      } top-0 bg-white text-black p-2 rounded shadow-lg max-w-xs`}
    >
      {text}
    </div>
  );
};

export default SpeechCloud;