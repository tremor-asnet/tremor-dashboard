export const REGEX = {
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]{3,65}.[A-Z]{2,4}$/i,
  PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i,
  URL: /(https?:\/\/)?[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,}(?:\.[a-zA-Z]{2,})?(?:\/\S*)?/i,
};

export const SEPARATOR = {
  COMMAS: ",",
  DOTS: ".",
};

export const CURRENCY_AMOUNT = {
  LOCALES: "en-US",
  STYLE: "decimal",
};
