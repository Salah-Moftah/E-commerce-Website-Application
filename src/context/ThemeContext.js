"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContextMode = createContext();

export const ThemeProviderMode = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    if (mode === "dark") {
      setMode("light");
      localStorage.setItem("mode", "light");
    } else {
      setMode("dark");
      localStorage.setItem("mode", "dark");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("mode") !== null) {
      let localStorageMode = localStorage.getItem("mode");
      setMode(localStorageMode);
    } else {
      let localStorageMode = mode;
      setMode(localStorageMode);
    }
  }, [mode]);

  return (
    <ThemeContextMode.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContextMode.Provider>
  );
};
