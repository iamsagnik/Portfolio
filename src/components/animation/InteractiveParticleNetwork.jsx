"use client";

import { useEffect, useRef, useState } from 'react';

const initialPassions = [
  { id: 'ai', name: 'AI/ML', x: 0.2, y: 0.25, size: 5, quote: '“If machines can learn, so can I — just with more snacks and less overheating.”' },
  { id: 'math', name: 'Mathematics', x: 0.5, y: 0.15, size: 4, quote: '“Everything around us is mathematics.”' },
  { id: 'art', name: 'Art', x: 0.8, y: 0.3, size: 5, quote: '“Painting with the patience of a cat and the heart of a daydreamer.”' },
  { id: 'music', name: 'Music & Dance', x: 0.5, y: 0.8, size: 4.5, quote: '“Turning noise complaints into dance parties since forever.”' },
  { id: 'travel', name: 'Travel', x: 0.85, y: 0.6, size: 5, quote: '“Every airport is a new quest, every hostel a side character.”' },
  { id: 'science', name: 'Science', x: 0.15, y: 0.65, size: 4, quote: '“I run experiments. Sometimes they work, sometimes they explode — both are data.”' },
  { id: 'writing', name: 'Writing', x: 0.65, y: 0.55, size: 4, quote: '“My brain talks too much — writing is just crowd control.”' },
  { id: 'football', name: 'Football', x: 0.3, y: 0.55, size: 4.5, quote: '"Every goal begins with a dream—and a pass."' },
  { id: 'philosophy', name: 'Philosophy', x: 0.4, y: 0.35, size: 4, quote: '“I think, therefore... I overthink. But at least I make it sound deep.”' },
];

const connections = [
  ['ai', 'science'], ['football', 'science'],
  ['math', 'writing'], ['math', 'art'],
  ['art', 'music'], ['art', 'football'],
  ['music', 'travel'], ['travel', 'art'],
  ['writing', 'travel'], ['writing', 'science'],
  ['football', 'ai'], ['football', 'music'],
  ['philosophy', 'writing'], ['philosophy', 'science'], ['ai', 'math'], ['philosophy', 'art'], 
  ['ai', 'philosophy'],
];

const InteractiveParticleNetwork = () => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const [animatedPassions, setAnimatedPassions] = useState([]);
  const [hoveredPassion, setHoveredPassion] = useState(null);


  useEffect(() => {
    setAnimatedPassions(
      initialPassions.map(p => ({
        ...p,
        animationAmplitude: Math.random() * 0.06 + 0.02,
      }))
    );

    const container = containerRef.current;
    const svg = svgRef.current;
    if (!container || !svg) return;
  }, []);

  const viewBoxWidth = 300;
  const viewBoxHeight = 200;
  const lineDashArray = 400;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center overflow-hidden rotating-svg-container"
      aria-label="Interactive particle network representing interconnected passions"
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="absolute w-full h-full object-contain opacity-80 rotating-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="node-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.8)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0.3)" />
          </radialGradient>
          <radialGradient id="node-hover-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--accent) / 1)" />
            <stop offset="100%" stopColor="hsl(var(--accent) / 0.5)" />
          </radialGradient>
          <style>{`
            .rotating-svg-container {
              perspective: 1200px;
            }
            .rotating-svg {
              transform-style: preserve-3d;
              transform: rotateY(0deg) rotateX(5deg);
            }
            .particle-line {
              stroke: hsl(var(--primary)); 
              stroke-width: 0.3;
              stroke-dasharray: ${lineDashArray}; 
              animation: draw-line-effect 12s infinite ease-in-out;
            }
            .passion-node {
              fill: url(#node-gradient);
              stroke: hsl(var(--primary) / 0.7);
              stroke-width: 0.4;
              transition: r 0.3s ease, fill 0.3s ease, stroke 0.3s ease, stroke-width 0.3s ease, filter 0.3s ease, transform 0.3s ease;
              animation: float-node 10s infinite alternate ease-in-out;
              cursor: pointer;
            }
            .passion-node.hovered {
              fill: url(#node-hover-gradient);
              stroke: hsl(var(--accent));
              stroke-width: 0.6;
              filter: url(#node-glow);
            }
            .passion-label {
              font-size: 3.5px;
              fill: hsl(var(--foreground) / 0.8);
              font-family: var(--font-geist-sans);
              text-anchor: middle;
              dominant-baseline: central;
              pointer-events: none;
              opacity: 0;
              transition: opacity 0.3s ease, transform 0.3s ease;
              transform: translateY(3px);
            }
            .passion-label.visible {
              opacity: 1;
              transform: translateY(0px);
            }

            @keyframes float-node {
              0% { transform: scale(1); }
              20% { transform: scale(calc(1 + var(--animation-amplitude, 0.05) * 0.7)); }
              40% { transform: scale(calc(1 - var(--animation-amplitude, 0.05) * 0.5)); }
              60% { transform: scale(calc(1 + var(--animation-amplitude, 0.05) * 0.8)); }
              80% { transform: scale(calc(1 - var(--animation-amplitude, 0.05) * 0.6)); }
              100% { transform: scale(1); }
            }

            @keyframes draw-line-effect {
              0%   { stroke-dashoffset: ${lineDashArray}; stroke-opacity: 0; }
              2%   { stroke-dashoffset: ${lineDashArray}; stroke-opacity: 0.6; }
              20%  { stroke-dashoffset: 0; stroke-opacity: 0.6; }
              70%  { stroke-dashoffset: 0; stroke-opacity: 0.15; }
              80%  { stroke-dashoffset: -${lineDashArray}; stroke-opacity: 0.6; }
              100% { stroke-dashoffset: -${lineDashArray}; stroke-opacity: 0; }
            }
          `}</style>
        </defs>

        <g className="lines-group">
          {connections.map(([id1, id2], index) => {
            const node1 = initialPassions.find(p => p.id === id1);
            const node2 = initialPassions.find(p => p.id === id2);
            if (!node1 || !node2) return null;
            return (
              <line
                key={`line-${index}`}
                className="particle-line"
                x1={node1.x * viewBoxWidth}
                y1={node1.y * viewBoxHeight}
                x2={node2.x * viewBoxWidth}
                y2={node2.y * viewBoxHeight}
                style={{ animationDelay: `${index * 0.6}s` }}
              />
            );
          })}
        </g>

        <g className="nodes-group">
          {animatedPassions.map((passion, index) => (
            <g
              key={passion.id}
              className="passion-node-group"
              style={{ '--animation-amplitude': passion.animationAmplitude }}
              onMouseEnter={() => setHoveredPassion(passion)}
              onMouseLeave={() => setHoveredPassion(null)}
            >
              <circle
                className={`passion-node ${hoveredPassion?.id === passion.id ? 'hovered' : ''}`}
                cx={passion.x * viewBoxWidth}
                cy={passion.y * viewBoxHeight}
                r={passion.size}
                style={{ animationDelay: `${index * 0.45}s` }}
              />
              <text
                className={`passion-label ${hoveredPassion?.id === passion.id ? 'visible' : ''}`}
                x={passion.x * viewBoxWidth}
                y={passion.y * viewBoxHeight + passion.size + 4}
              >
                {passion.name}
              </text>
            </g>
          ))}
        </g>
      </svg>
        {hoveredPassion && (
          <div
            className="absolute bg-neutral-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg pointer-events-none transition-all duration-200 max-w-[180px] break-words whitespace-normal"
            style={{
              left: `${hoveredPassion.x * 100}%`,
              top: `${hoveredPassion.y * 100}%`,
              transform: 'translate(-50%, -120%)',
            }}
          >
            <div className="font-semibold text-sm">{hoveredPassion.name}</div>
            <div className="italic text-[11px] mt-1 opacity-80 ">{hoveredPassion.quote}</div>
          </div>
        )}
    </div>
  );
};

export default InteractiveParticleNetwork;
