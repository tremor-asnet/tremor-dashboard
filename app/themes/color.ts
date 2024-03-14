export const color = {
  test: "#000",
  primary: "#344767",
  secondary: "#7b809a",
  tertiary: "#55576D",
  seldom: "#1a73e8",
  few: "#4caf50",
  fewter: "#339537",
  litle: "#ebebeb",
  select: "#f0f2f5",
  attention: "#f44335",
  grayter: "#485976",
  rarely: "#dee2e6",
  lighter: "rgba(255, 255, 255, 0.8)",
  greyish: "rgba(255, 255, 255, 0.4)",
  grayish: "rgba(240, 242, 245, 0.4)",

  dark: {
    primary: "#ffffff",
    romance: "#ffffffcc",
    lighter: "rgba(255, 255, 255, 0.8)",
    brightGray: "#6c757d",
  },
  // light mode
  tremor: {
    brand: {
      faint: "#eff6ff", // blue-50
      muted: "#bfdbfe", // blue-200
      subtle: "#344767",
      DEFAULT: "#3b82f6", // blue-500
      emphasis: "#1d4ed8", // blue-700
      inverted: "#ffffff", // white
    },
    background: {
      muted: "#f9fafb", // gray-50
      subtle: "#f3f4f6", // gray-100
      DEFAULT: "#ffffff", // white
      emphasis: "#374151", // gray-700
    },
    border: {
      DEFAULT: "#d2d6da",
    },
    outline: {
      DEFAULT: "#d2d6da",
    },
    ring: {
      DEFAULT: "#d2d6da",
    },
    content: {
      title: "#344767", // Rhino
      DEFAULT: "#7b809a", // Waterloo
      emphasis: "#374151", // Fruit Salad
      seldom: "#1a73e8", // fruitRoyal Blue
    },
  },
  // dark mode
  "dark-tremor": {
    brand: {
      faint: "#0B1229",
      muted: "#172554", // blue-950
      subtle: "#1e40af", // blue-800
      DEFAULT: "#3b82f6", // blue-500
      emphasis: "#60a5fa", // blue-400
      inverted: "#030712", // gray-950
    },
    background: {
      muted: "#131A2B",
      subtle: "#1f2937", // gray-800
      DEFAULT: "#111827", // gray-900
      emphasis: "#d1d5db", // gray-300
    },
    border: {
      DEFAULT: "#1f2937", // gray-800
    },
    outline: {
      DEFAULT: "#d2d6da",
    },
    ring: {
      DEFAULT: "#1f2937", // gray-800
    },
    content: {
      subtle: "#4b5563", // gray-600
      DEFAULT: "#fff", // white
      emphasis: "#d2d6da",
      strong: "#f9fafb", // gray-50
      inverted: "#000000", // black
      title: "#fff",
      romance: "#ffffffcc",
      seldom: "#1a73e8",
      slate: "#7b809a",
    },
  },
};

export const backgroundColor = {
  primary: "#123456",
  secondary: "#ffffff",
  few: "#339537",
  seldom: "#bce2be",
  body: "#f0f2f5",
  total: "rgb(26, 32, 53)",
  lighter: "rgba(255, 255, 255, 0.8)",
  light: "#7b809a",
  border: "#dee2e6",
  dark_blue: "rgb(32, 41, 64)",
  greyish: "#f8f9fa",
  "green-500": "#43A047",
  "orange-500": "#FB8C00",
  graydark: "#1a2035",

  dark: {
    primary: "#111827",
    secondary: "#344767",
    "gradient-primary": "#1a2333",
  },
  //TODO: Will update when implement light/dark themes
  // light mode
  tremor: {
    primary: "#ffffff",
    few: "#339537",
    seldom: "#bce2be",
    body: "#f0f2f5",
    border: "#ced4da",
  },
  // dark mode
  "dark-tremor": {
    primary: "#202940",
    few: "#339537",
    seldom: "#bce2be",
    body: "#f0f2f5",
    total: "rgb(26, 32, 53)",
    border: "rgb(206, 212, 218)",
  },
};

export const backgroundImage = {
  gradientPrimary: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
  gradientSecondary:
    "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
  gradientElementary:
    "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
  gradientFew: "linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))",
  gradientSeldom: "linear-gradient(195deg, rgb(239, 83, 80), rgb(229, 57, 53))",
  "gradient-primary":
    "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
  "gradient-line":
    "linear-gradient(to right, rgba(52, 71, 103, 0), rgba(52, 71, 103, 0.4), rgba(52, 71, 103, 0))",
  "gradient-pickled":
    "linear-gradient(195deg, rgb(50, 58, 84), rgb(26, 32, 53))",
  "gradient-arsenic": "linear-gradient(195deg, #42424a, #191919)",
  "gradient-divider":
    "linear-gradient(to right,rgba(255,255,255,0),#FFFFFF,rgba(255,255,255,0))",
  "gradient-item-page": "linear-gradient(195deg, #42424a, #191919)",
  "gradient-select":
    "linear-gradient(to right, rgba(52, 71, 103, 0), rgba(52, 71, 103, 0.4), rgba(52, 71, 103, 0))",
  "gradient-btn-back":
    "linear-gradient(195deg, rgb(235, 239, 244), rgb(206, 212, 218))",
  "gradient-dark":
    "linear-gradient(rgba(52, 71, 103, 0), rgb(255, 255, 255), rgba(52, 71, 103, 0))",
  "gradient-lighter":
    "linear-gradient(rgba(52, 71, 103, 0), rgba(52, 71, 103, 0.4), rgba(52, 71, 103, 0))",

  //TODO: Will update when implement light/dark themes
  // light mode
  tremor: {
    gradientPrimary:
      "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
    gradientSecondary:
      "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
    gradientElementary:
      "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
    gradientFew: "linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))",
    gradientSeldom:
      "linear-gradient(195deg, rgb(239, 83, 80), rgb(229, 57, 53))",
    "gradient-primary":
      "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
  },
  // dark mode
  "dark-tremor": {
    gradientPrimary:
      "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
    gradientSecondary:
      "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
    gradientElementary:
      "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
    gradientFew: "linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))",
    gradientSeldom:
      "linear-gradient(195deg, rgb(239, 83, 80), rgb(229, 57, 53))",
    "gradient-primary":
      "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
  },
  dark: {
    "gradient-item-page":
      "linear-gradient(195deg, rgb(50, 58, 84), rgb(26, 32, 53))",
  },
};

export const borderColor = {
  primary: "#344767",
  attention: "#f44335",

  //TODO: Will update when implement light/dark themes
  // light mode
  tremor: {
    primary: "#344767",
  },
  // dark mode
  "dark-tremor": {
    primary: "#344767",
    background: "rgb(255, 255, 255)",
  },
};

export const fill = {
  "light-500": "white",
  "royal-blue-500": "#1a73e8",
  "amaranth-500": "#d81b60",
  "cod-gray-500": "#191919",
  "river-bed-500": "#495361",

  //TODO: Will update when implement light/dark themes
  // light mode
  tremor: {
    "light-500": "white",
  },
  // dark mode
  "dark-tremor": {
    "light-500": "white",
  },
};

export const boxShadow = {
  // light
  "tremor-input": "none",
  "tremor-card":
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  "tremor-cardImage":
    "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
  "tremor-dropdown":
    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  "box-icon-default":
    "0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)",
  "box-icon-primary":
    "rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(64, 64, 64, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem",
  "box-sidebar": "0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.05)",
  "btn-primary":
    "rgba(52, 71, 103, 0.15) 0rem 0.1875rem 0.1875rem 0rem, rgba(52, 71, 103, 0.2) 0rem 0.1875rem 0.0625rem -0.125rem, rgba(52, 71, 103, 0.15) 0rem 0.0625rem 0.3125rem 0rem",
  "btn-primary-hover":
    "0rem 0.875rem 1.625rem -0.75rem rgba(52, 71, 103, 0.4), 0rem 0.25rem 1.4375rem 0rem rgba(52, 71, 103, 0.15), 0rem 0.5rem 0.625rem -0.3125rem rgba(52, 71, 103, 0.2)",
  "box-header-sticky":
    "rgba(255, 255, 255, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem",
  "line-chart":
    "0rem_0.25rem_0.375rem_-0.0625rem_rgba(0,0,0,0.1),0rem_0.125rem_0.25rem_-0.0625rem_rgba(0,0,0,0.06)",
  "item-pagination":
    "0rem 0.1875rem 0.1875rem 0rem rgba(52, 71, 103, 0.15),0rem 0.1875rem 0.0625rem -0.125rem rgba(52, 71, 103, 0.2),0rem 0.0625rem 0.3125rem 0rem rgba(52, 71, 103, 0.15)",
  // dark
  "dark-tremor-input": "",
  "dark-tremor-card":
    "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  "dark-tremor-dropdown":
    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  "box-header":
    "rgba(52, 71, 103, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem",
  "select-option":
    "rgba(0, 0, 0, 0.14) 0rem 0.125rem 0.125rem 0rem, rgba(0, 0, 0, 0.2) 0rem 0.1875rem 0.0625rem -0.125rem, rgba(0, 0, 0, 0.12) 0rem 0.0625rem 0.3125rem 0rem",
  "main-content":
    "rgba(0,0,0,0.14)_0rem_0.125rem_0.125rem_0rem,rgba(0,0,0,0.2)_0rem_0.1875rem_0.0625rem_-0.125rem,rgba(0,0,0,0.12)_0rem_0.0625rem_0.3125rem_0rem",
  dark: {
    "item-pagination":
      "rgba(52, 71, 103, 0.15) 0rem 0.1875rem 0.1875rem 0rem, rgba(52, 71, 103, 0.2) 0rem 0.1875rem 0.0625rem -0.125rem, rgba(52, 71, 103, 0.15) 0rem 0.0625rem 0.3125rem 0rem",
  },
};
