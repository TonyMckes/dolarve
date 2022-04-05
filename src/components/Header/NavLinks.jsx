import { AiFillGold, AiTwotoneBank } from "react-icons/ai";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { MdOutlineFavorite } from "react-icons/md";
import { RiBillFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function NavLinks({ sidebar }) {
  const navItems = [
    [<MdOutlineFavorite />, "Favorites", "/"],
    [<RiBillFill />, "Cotizaciones", "/cotizaciones"],
    [<BsCurrencyBitcoin />, "Criptomonedas", "/criptomonedas"],
    [<AiTwotoneBank />, "Tasas de bancos", "/tasas-de-bancos"],
    [<AiFillGold />, "Recursos", "/recursos"],
    // [<AiFillGold        />, "Blue",            "/blue"],
    // [<AiFillGold        />, "Divisa",          "/divisa"],
    // [<AiFillGold        />, "Divisa Blue",     "/divisa-blue"],
  ];

  return (
    <ul
      className={`h-auto space-y-10 text-xl  ${
        sidebar ? "opacity-100" : "opacity-0 md:opacity-100"
      }`}
    >
      {navItems.map(([icon, title, url], i) => {
        return (
          <li className="" key={i}>
            <NavLink
              className={({ isActive }) =>
                ` whitespace-nowrap hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-xl px-2 py-1 align-middle  ${
                  isActive
                    ? "font-bold ring-1 ring-neutral-200 dark:ring-neutral-600"
                    : ""
                }`
              }
              to={url}
            >
              {icon} {title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
