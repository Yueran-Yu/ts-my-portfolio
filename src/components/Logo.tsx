import * as React from 'react';
import {Link} from 'react-scroll';

export const Logo = ({id}) => (
  <Link to={id}>
    <svg className='logo' width="541" height="547" viewBox="0 0 541 547" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_11_42)">
        <path
          d="M265.5 0C215.475 -5.96548e-07 166.467 14.1333 124.124 40.7714C81.7802 67.4095 47.8243 105.469 26.1679 150.563C4.51161 195.658 -3.96383 245.954 1.71813 295.656C7.40009 345.358 27.0083 392.443 58.2834 431.487C89.5586 470.53 131.228 499.944 178.491 516.338C225.754 532.732 276.687 535.44 325.421 524.15C374.156 512.859 418.71 488.03 453.948 452.523C489.187 417.015 513.677 372.275 524.597 323.455H403C392 342.5 387.224 347.95 368.048 367.272C348.872 386.594 324.627 400.105 298.107 406.249C271.587 412.393 243.871 410.92 218.152 401.998C192.433 393.077 169.758 377.071 152.739 355.825C135.72 334.578 125.05 308.956 121.958 281.91C118.866 254.864 123.478 227.494 135.263 202.955C147.048 178.416 165.525 157.705 188.567 143.21C211.609 128.714 238.278 121.023 265.5 121.023V0Z"
          fill="url(#paint0_linear_11_42)"/>
        <path d="M206 121L258 0H491L378.713 121H206Z" fill="#2D98B3"/>
      </g>
      <g filter="url(#filter1_d_11_42)">
        <path d="M381.974 195H226V323H525L381.974 195Z" fill="url(#paint1_linear_11_42)"
              shapeRendering="crispEdges"/>
      </g>
      <defs>
        <filter id="filter0_d_11_42" x="-0.000152588" y="0" width="540.597" height="547"
                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                         result="hardAlpha"/>
          <feOffset dx="8" dy="8"/>
          <feGaussianBlur stdDeviation="4"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.898039 0 0 0 0 0.898039 0 0 0 0 0.898039 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_42"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_42" result="shape"/>
        </filter>
        <filter id="filter1_d_11_42" x="226" y="195" width="309" height="138" filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                         result="hardAlpha"/>
          <feOffset dx="5" dy="5"/>
          <feGaussianBlur stdDeviation="2.5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_42"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_42" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_11_42" x1="226.733" y1="-49" x2="-107.027" y2="90.7416"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0.289814" stopColor="#2D98B3"/>
          <stop offset="1" stopColor="#2D98B3" stopOpacity="0.296036"/>
        </linearGradient>
        <linearGradient id="paint1_linear_11_42" x1="306" y1="160" x2="392" y2="385.5"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0.296134" stopColor="#2D98B3"/>
          <stop offset="1" stopColor="#2D98B3" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  </Link>
);

