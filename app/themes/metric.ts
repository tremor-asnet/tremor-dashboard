export const screens = {
  xs: { min: "336px" },
  // => @media (min-width: 336px) { ... }
};

export const borderRadius = {
  "tremor-small": "0.375rem",
  "tremor-default": "0.5rem",
  "tremor-full": "9999px",
  "tremor-none": "0",

  //TODO: Will update when implement light/dark themes
  // light mode
  tremor: {
    "tremor-small": "0.375rem",
    "tremor-default": "0.5rem",
    "tremor-full": "9999px",
    "tremor-none": "0",
  },
  // dark mode
  "dark-tremor": {
    "tremor-small": "0.375rem",
    "tremor-default": "0.5rem",
    "tremor-full": "9999px",
    "tremor-none": "0",
  },
};

export const spacing: Record<string, string> = {
  "4": "1rem",
};
