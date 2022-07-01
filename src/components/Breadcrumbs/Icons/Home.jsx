import * as React from "react";

function Home(
  props,
  { color = "#262626", fill = "#262626", height = 24, width = 24 }
) {
  return (
    <svg
      aria-label="Home"
      color={color}
      fill={fill}
      height={height}
      viewBox="0 0 24 24"
      width={width}
      {...props}
    >
      <path
        d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}

export default Home;
