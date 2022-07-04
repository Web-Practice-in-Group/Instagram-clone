import * as React from "react";

function Search(props) {
  return (
    <svg
      aria-label="Buscar"
      className="_ab6-"
      color="#8e8e8e"
      fill="#8e8e8e"
      height={16}
      viewBox="0 0 24 24"
      width={16}
      {...props}
    >
      <path
        d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.511 16.511L22 22"
      />
    </svg>
  );
}

export default Search;
