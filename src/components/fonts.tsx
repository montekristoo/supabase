import { Global } from "@emotion/react";
import React from "react";

const Fonts = () => (
  <Global
    styles={`
    @font-face {
font-family: 'Source Code Pro';
font-style: normal;
font-weight: 400;
line-height: 14px;
}`}
  />
);

export default Fonts;
