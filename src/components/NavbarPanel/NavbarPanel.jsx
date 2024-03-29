import SessionLinks from "components/NavbarPanel/SessionLinks";
import { useState } from "react";
import { FcCurrencyExchange } from "react-icons/fc";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import ProfileInfo from "./ProfileInfo";
import SidebarToggler from "./SidebarToggler";

function NavbarPanel() {
  const [sidebar, setSidebar] = useState(false);

  const sidebarToggle = sidebar
    ? "-translate-x-0"
    : "-translate-x-full md:-translate-x-0";

  const sidebarHandler = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <>
      <SidebarToggler handler={sidebarHandler} sidebar={sidebar} />
      <div className="fixed top-0 z-10 w-screen transition-colors duration-500 shadow bg-white/75 dark:bg-neutral-800/75 h-14 backdrop-blur md:hidden"></div>

      <div
        className={`fixed top-0 z-30 flex flex-col justify-between w-2/3 h-screen row-span-2 px-2 transition bg-white shadow-xl md:bg-inherit dark:md:bg-inherit md:py-4 md:w-auto md:sticky dark:bg-neutral-800 md:shadow-none ${sidebarToggle}`}
      >
        <nav className="space-y-2 whitespace-nowrap pt-14 md:pt-0 lg:p-4 lg:mx-4 md:w-auto xl:pl-16">
          <ul className="mt-6 space-y-6 text-lg md:space-y-10 lg:text-xl">
            <li>
              <Link
                className="px-2 py-1 font-bold align-middle whitespace-nowrap hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-xl"
                to="/"
              >
                <FcCurrencyExchange /> DólarVE
              </Link>
            </li>

            <NavLinks />
          </ul>
        </nav>
      </div>

      <div
        className={`fixed bottom-0 md:w-auto md:sticky z-30 w-2/3 px-2 space-y-2 transition divide-y divide-neutral-450 md:col-start-1 md:row-start-3 lg:ml-8 xl:pl-16 ${sidebarToggle}`}
      >
        <ProfileInfo />
        <SessionLinks />
      </div>
    </>
  );
}

export default NavbarPanel;
