import { useAuthContext } from "context/AuthContext";
import { useFavoritesContext } from "context/FavoritesContext";
import { useState } from "react";
import { FcCurrencyExchange } from "react-icons/fc";
import { HiMenu } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { auth } from "utils/firebase";
import Toggle from "utils/toggleTheme";
import NavLinks from "./NavLinks";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const [show, setShow] = useState(false);

  const { authState, setAuthState } = useAuthContext();
  const { displayName, email, photoURL } = authState || {};
  const { setFavorites } = useFavoritesContext();

  const handleClick = (e) => {
    setShow(!show);
  };

  const handleLogout = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("favorites");

    setAuthState(null);
    setFavorites([]);

    auth.signOut();
  };

  return (
    <header
      className={` row-span-2 fixed md:sticky top-0 flex flex-col justify-between z-10 bg-white dark:bg-neutral-700 md:bg-inherit md:dark:bg-inherit h-screen transition-all md:py-4 md:space-y-4 drop-shadow-lg md:drop-shadow-none ${
        sidebar ? "w-2/3 " : "w-0 md:w-auto"
      }`}
    >
      <div className="fixed top-0 w-screen bg-white/90 h-14 dark:bg-neutral-700/90 backdrop-blur md:hidden">
        <button
          className="fixed top-0 z-50 outline-none "
          onClick={() => setSidebar(!sidebar)}
        >
          <HiMenu className="w-8 h-8 m-3 " />
        </button>
      </div>
      <div className="">
        <div
          className={`whitespace-nowrap pt-14 md:pt-0 mx-2 lg:p-4 lg:mx-4 space-y-2 transition-all md:w-auto xl:pl-16 ${
            sidebar ? "block" : "hidden md:block"
          }`}
        >
          <NavLink
            className={`md:opacity-100 text-xl font-semibold ${
              sidebar ? " " : "opacity-0"
            }`}
            to="/"
          >
            <FcCurrencyExchange className="inline w-9 h-9 m-2" /> DolarVE
          </NavLink>
        </div>
        <nav
          className={` whitespace-nowrap pt-14 md:pt-0 mx-2 lg:p-4 lg:mx-4 space-y-2 transition-all md:w-auto xl:pl-16 ${
            sidebar ? "block" : "hidden md:block"
          }`}
        >
          <NavLinks sidebar={sidebar} />
        </nav>
      </div>

      <div
        className={` whitespace-nowrap pt-14 md:pt-0 mx-2 lg:p-4 lg:mx-4 space-y-2 transition-all md:w-auto xl:pl-16 ${
          sidebar ? "block" : "hidden md:block"
        }`}
      >
        <Toggle sidebar={sidebar} />

        {authState ? (
          <div
            onClick={handleClick}
            className="flex items-center px-2 py-1 cursor-pointer select-none rounded-3xl hover:bg-neutral-200 dark:hover:bg-neutral-700"
          >
            {show && (
              <div className="fixed grid items-start justify-center gap-8 translate-x-2 -translate-y-12">
                <div className="relative w-44 ">
                  <div className="absolute w-44 -inset-0.5 bg-neutral-800 dark:bg-neutral-500  rounded-lg blur opacity-75 hover:opacity-100 transition duration-1000 hover:duration-200 animate-tilt"></div>

                  <div className="relative flex p-2 bg-gray-100 rounded-lg dark:bg-neutral-800">
                    <button
                      className="items-center flex-grow px-4 py-2 leading-none bg-gray-200 rounded-lg hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
                      onClick={handleLogout}
                    >
                      <span className="">Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            <img
              className="w-10 rounded-full"
              src={photoURL}
              alt={displayName}
            />
            <div className="mx-1 overflow-hidden">
              <div className="text-sm font-semibold tracking-tighter ">
                {displayName}
              </div>
              <div className="text-xs tracking-tighter text-gray-500 dark:text-gray-400 ">
                {email}
              </div>
            </div>
          </div>
        ) : (
          <Link to="/login">Sign in</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
