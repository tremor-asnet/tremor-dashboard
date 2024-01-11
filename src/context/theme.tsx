"use client";

import { createContext, useState } from "react";

interface ThemeContext {
  theme: boolean;
  toggleTheme: () => void;
}

interface ThemeProvider {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContext>({
  theme: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: ThemeProvider) => {
  const [theme, setTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
