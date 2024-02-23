import React, { useState } from "react";

const CircularProgressBar = ({ percentage, gradientColors }) => {
  const [animated, setAnimated] = useState(false);

  const handleHover = () => {
    setAnimated(true);
  };

  const handleMouseLeave = () => {
    setAnimated(false);
  };

  return (
    <div
      className={`relative h-40 transition-transform transform hover:animate-progress`}
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
          animated ? "animate-progress" : ""
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <defs>
          <linearGradient
            id={`gradient-${percentage}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            {gradientColors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index * 100) / (gradientColors.length - 1)}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
        </defs>

        <circle
          cx="60"
          cy="60"
          r="40"
          fill="transparent"
          stroke="#f3f3f3"
          strokeWidth="8"
        />

        <circle
          cx="60"
          cy="60"
          r="40"
          fill="transparent"
          stroke={`url(#gradient-${percentage})`}
          strokeWidth="8"
          className={`transition-stroke-dashoffset ${
            animated ? "animate-progress" : ""
          }`}
          style={{
            strokeDasharray: "251.32741",
            strokeDashoffset: `calc(251.32741 - (251.32741 * ${percentage}) / 100)`,
          }}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white">
        {`${percentage}%`}
      </div>
    </div>
  );
};

export default CircularProgressBar;
