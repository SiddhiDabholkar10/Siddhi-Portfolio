import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="S" transform="translate(11.000000, 5.000000)">
        <path
          d="M55,35 C55,30 50,25 43,25 C35,25 30,30 30,35 C30,40 35,45 43,45 C50,45 55,50 55,55 C55,60 50,65 43,65 C35,65 30,60 30,55"
          fill="none"
          strokeWidth="5"
          stroke = "currentColor"
        />
      </g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                    L 11, 27
                    L 11, 72
                    L 50, 95
                    L 89, 73
                    L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
