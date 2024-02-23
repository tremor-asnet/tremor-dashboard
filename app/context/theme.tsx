"use client";

import React, { createContext, useEffect, useState } from "react";

interface ThemeContext {
  theme: boolean;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContext>({
  theme: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("theme")!);
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

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
