import * as React from "react";

function Save(
  props,
  { color = "#262626", fill = "#262626", height = 24, width = 24 }
) {
  return (
    <svg
      aria-label="Save"
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
        d="M20 21L12 13.44 4 21 4 3 20 3 20 21z"
      />
    </svg>
  );
}

export default Save;
