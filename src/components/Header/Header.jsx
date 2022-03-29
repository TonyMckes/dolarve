import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FcCurrencyExchange } from "react-icons/fc";
import { HiMenu } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Toggle from "../../utils/toggleTheme";
import NavLinks from "./NavLinks";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header
      className={` row-span-2 fixed md:sticky top-0 flex flex-col z-10 bg-white dark:bg-neutral-700 md:bg-inherit md:dark:bg-inherit h-screen transition-all md:py-4 md:space-y-4 drop-shadow-lg md:drop-shadow-none ${
        sidebar ? "w-2/3 " : "w-0 md:w-auto"
      }`}
    >
      {/* <div className=""></div> */}
      <div className="w-screen h-14 fixed top-0 bg-white/95 md:hidden">
        <button
          className="fixed top-0 z-50 outline-none "
          onClick={() => setSidebar(!sidebar)}
        >
          <HiMenu className="w-8 h-8 m-3 " />
        </button>
      </div>
      <div
        className={`whitespace-nowrap pt-14 md:pt-0 mx-2 lg:p-4 lg:mx-4 space-y-2 transition-all md:w-auto xl:pl-16 ${
          sidebar ? "block" : "hidden md:block"
        }`}
      >
        <NavLink
          className={`md:opacity-100 ${sidebar ? " " : "opacity-0"}`}
          to="/"
        >
          <FcCurrencyExchange className="inline w-6 h-6 m-2" /> DolarVE
        </NavLink>
      </div>
      <nav
        className={` whitespace-nowrap pt-14 md:pt-0 mx-2 lg:p-4 lg:mx-4 space-y-2 transition-all md:w-auto xl:pl-16 ${
          sidebar ? "block" : "hidden md:block"
        }`}
      >
        <NavLinks sidebar={sidebar} />
      </nav>
      <div
        className={` flex-grow whitespace-nowrap pt-14 md:pt-0 mx-2 lg:p-4 lg:mx-4 space-y-2 transition-all md:w-auto xl:pl-16 ${
          sidebar ? "block" : "hidden md:block"
        }`}
      >
        <Toggle sidebar={sidebar} />
      </div>
    </header>
  );
}
