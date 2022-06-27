import * as React from "react";

function Dots(props) {
  return (
    <svg
      aria-label="Dots"
      className="_ab6-"
      color="#fafafa"
      fill="#fafafa"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      {...props}
    >
      <circle cx={12} cy={12} r={1.5} />
      <circle cx={6} cy={12} r={1.5} />
      <circle cx={18} cy={12} r={1.5} />
    </svg>
  );
}

export default Dots;
