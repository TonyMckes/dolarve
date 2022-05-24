import { setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { getDocSnap } from "utils/firebase";
import { useAuthContext } from "./AuthContext";

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
  const { authState } = useAuthContext();

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);

    if (!authState) return;

    (async () => {
      const { docRef, docSnap } = await getDocSnap(authState.uid);

      if (docSnap.exists()) {
        const dbTheme = docSnap.get("color-theme");
        if (dbTheme === theme) return;

        await setDoc(docRef, { "color-theme": theme }, { merge: true });
      }
    })();
  }, [theme]);

  useEffect(() => {
    if (!authState) return;

    (async () => {
      const { docRef, docSnap } = await getDocSnap(authState.uid);

      if (docSnap.exists()) {
        const dbTheme = docSnap.get("color-theme");
        if (dbTheme === theme) return;

        setTheme(dbTheme);
        localStorage.setItem("color-theme", dbTheme);
      } else {
        await setDoc(docRef, { "color-theme": theme });
      }
    })();
  }, [authState]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="min-h-full transition-colors duration-500 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
