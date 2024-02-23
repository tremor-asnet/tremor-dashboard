"use client";

import React, { createContext, useEffect, useState } from "react";

interface ThemeContext {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContext>({
  isDarkTheme: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkTheme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("isDarkTheme")!);
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setTheme(!isDarkTheme);
  };

  const value = {
    isDarkTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
