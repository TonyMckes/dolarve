import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getInitialTheme = () => {
  if (typeof window !== "undefined" && localStorage) {
    const storedPref = localStorage.getItem("color-theme");
    if (storedPref) return storedPref;

    const userMedia = matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) return "dark";
  }

  return "light";
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="min-h-full transition-colors duration-500 bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
