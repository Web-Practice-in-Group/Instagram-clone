import * as React from "react";

function Comment(
  props,
  { color = "#262626", fill = "#262626", height = 24, width = 24 }
) {
  return (
    <svg
      aria-label="Comment"
      className="_ab6-"
      color={color}
      fill={fill}
      height={height}
      viewBox="0 0 24 24"
      width={width}
      {...props}
    >
      <path
        d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}

export default Comment;
