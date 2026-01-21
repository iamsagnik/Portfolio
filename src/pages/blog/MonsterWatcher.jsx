import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Eye from "./Eye";
import SpeechCloud from "./SpeechCloud";

const MonsterWatcher = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerY = window.innerHeight * 0.3; // eye line threshold
      if (e.clientY > centerY) {
        const dx = (e.clientX - window.innerWidth / 2) / 40;
        const dy = (e.clientY - centerY) / 40;
        setEyePos({ x: dx, y: dy });
      } else {
        setEyePos({ x: 0, y: 0 });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
    >
      <div className="relative flex gap-6 bg-purple-700 p-4 rounded-t-full shadow-xl">
        <Eye x={eyePos.x} y={eyePos.y} />
        <Eye x={eyePos.x} y={eyePos.y} />
        <SpeechCloud text="Welcome my reader, I am the Watcher." position="left" />
        <SpeechCloud
          text="Till now, this many have visited this page."
          position="right"
        />
      </div>
    </motion.div>
  );
};

export default MonsterWatcher;