import * as React from "react";

function Close(props,{ color = "#262626", fill = "#262626", height = 18, width = 18 }) {
  return (
    <svg
      aria-label="Close"
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
        strokeWidth={3}
        d="M20.643 3.357L12 12 3.353 20.647"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M20.649 20.649L3.354 3.354"
      />
    </svg>
  );
}

export default Close;
