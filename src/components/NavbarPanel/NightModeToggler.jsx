import { ThemeContext } from "context/ThemeContext";
import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const NightModeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="rounded-full">
      {theme === "dark" ? (
        <FaSun
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
          onClick={handleClick}
        />
      ) : (
        <FaMoon
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default NightModeToggler;
