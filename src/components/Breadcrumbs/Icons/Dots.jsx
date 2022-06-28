import * as React from "react";

function Dots(
  props,
  { color = "#262626", fill = "#262626", height = 24, width = 24 }
) {
  return (
    <svg
      aria-label="Dots"
      className="_ab6-"
      color={color}
      fill={fill}
      height={height}
      viewBox="0 0 24 24"
      width={width}
      {...props}
    >
      <circle cx={12} cy={12} r={1.5} />
      <circle cx={6} cy={12} r={1.5} />
      <circle cx={18} cy={12} r={1.5} />
    </svg>
  );
}

export default Dots;
