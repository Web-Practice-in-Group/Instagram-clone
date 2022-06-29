import * as React from "react";

function Mod(
  props,
  { color = "#262626", fill = "#262626", height = 24, width = 24 }
) {
  return (
    <svg
      aria-label="Buscar personas"
      className="_ab6-"
      color={color}
      fill={fill}
      height={height}
      viewBox="0 0 24 24"
      width={width}
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.941 13.953L7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953z"
      />
      <path
        fillRule="evenodd"
        d="M10.06 10.056L13.949 13.945 7.581 16.424 10.06 10.056z"
      />
      <circle
        cx={12.001}
        cy={12.005}
        fill="none"
        r={10.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}

export default Mod;
