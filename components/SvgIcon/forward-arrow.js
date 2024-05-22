import * as React from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={11}
    fill="none"
    viewBox="78 12 18 11"
    {...props}
  >
    <path
      fill="#fff"
      d="M95.354 17.854a.5.5 0 0 0 0-.708l-3.182-3.182a.5.5 0 1 0-.707.708l2.828 2.828-2.829 2.828a.5.5 0 1 0 .708.707l3.182-3.181ZM79 18h16v-1H79v1Z"
    />
  </svg>
);

export default SvgComponent;
