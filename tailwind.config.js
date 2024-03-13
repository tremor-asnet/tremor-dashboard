import {
  color,
  backgroundColor,
  backgroundImage,
  boxShadow,
  safelist,
  fontSize,
  fontFamily,
  borderColor,
  borderRadius,
  fill,
  screens,
} from "./app/themes";

/** @type {import('tailwindcss').Config} */
/* eslint-disable max-len */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      colors: color,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      backgroundImage: backgroundImage,
      boxShadow: boxShadow,
      borderRadius: borderRadius,
      fontSize: fontSize,
      fontFamily: fontFamily,
      screens: screens,
      fill: fill,
    },
  },
  safelist: safelist,
};
