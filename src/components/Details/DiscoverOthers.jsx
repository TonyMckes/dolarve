import { useCurrenciesContext } from "context/CurrenciesContext";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getRandomCur } from "utils";
import { urlPath } from "../../constants";

export function DiscoverOthers() {
  const [randomCurr, setRandomCurr] = useState([]);
  const { currencies } = useCurrenciesContext();
  const location = useLocation();

  useEffect(() => {
    setRandomCurr(getRandomCur(currencies));
  }, [location]);

  return (
    <div className="">
      <ul className="overflow-y-auto h-1/4 ">
        {currencies.length > 0 &&
          randomCurr.map(({ _id, name, icon, slug, symbol, type }) => (
            <li
              key={_id}
              className="w-full transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-2xl "
            >
              <Link
                className="block p-1 my-1 "
                // onClick={} TODO: Loading indicator
                to={`/${urlPath[type]}/${slug ? slug : _id}`} // to={`${pathname.substr(0, pathname.lastIndexOf("/"))}/${
                //   slug ? slug : _id
                // }`}
              >
                <img
                  className="inline w-6 h-6 rounded-full"
                  src={icon}
                  alt={name}
                />{" "}
                {name} <span className="text-xs">({symbol})</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
