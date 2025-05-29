/* eslint-disable @typescript-eslint/no-unused-vars */
export default function BackgroundDots() {
  const dots = Array.from({ length: 20 }, (_, i) => ({
    cx: Math.random() * 100,              // random x from 0 to 100
    cy: Math.random() * 100,              // random y from 0 to 100
    r: Math.random() * 2 + 1,             // radius between 1 and 3
    fill: `hsl(${Math.random() * 360}, 100%, 70%)`, // random color
    delay: Math.random() * 3              // delay between 0–3 seconds
  }));

  return (
    <svg
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 100 100"
    >
      {dots.map((dot, i) => (
        <circle key={i} cx={dot.cx} cy={dot.cy} r={dot.r} fill={dot.fill}>
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="3s"
            begin={`${dot.delay}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}
