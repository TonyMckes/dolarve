import { AiFillGold, AiTwotoneBank } from "react-icons/ai";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { MdOutlineFavorite } from "react-icons/md";
import { RiBillFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function NavLinks() {
  const navItems = [
    [<MdOutlineFavorite />, "Favoritas", "/"],
    [<RiBillFill />, "Cotizaciones", "/cotizaciones"],
    [<BsCurrencyBitcoin />, "Criptomonedas", "/criptomonedas"],
    [<AiTwotoneBank />, "Tasas de bancos", "/tasas-de-bancos"],
    [<AiFillGold />, "Recursos", "/recursos"],
    // [<AiFillGold        />, "Blue",            "/blue"],
    // [<AiFillGold        />, "Divisa",          "/divisa"],
    // [<AiFillGold        />, "Divisa Blue",     "/divisa-blue"],
  ];

  return navItems.map(([icon, title, url], i) => {
    return (
      <li key={i}>
        <NavLink
          className={({ isActive }) =>
            `px-2 py-1 font-medium rounded-xl whitespace-nowrap hover:bg-neutral-100 dark:hover:bg-neutral-700 ${
              isActive ? "font-bold ring-1 ring-neutral-450" : ""
            }`
          }
          to={url}
        >
          {icon} {title}
        </NavLink>
      </li>
    );
  });
}

export default NavLinks;
