"use client"

import styles from "./DarkModeToggle.module.css";
import { useContext } from "react";
import { ThemeContextMode } from "src/context/ThemeContext.js";

export default function DarkModeToggle() {
  const { mode, toggle} = useContext(ThemeContextMode)
  
  return (
    <div className={styles.darkAndLight} onClick={() => {
      toggle()
  }}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🌚</div>
      <div
        className={styles.switcher}
        style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}
