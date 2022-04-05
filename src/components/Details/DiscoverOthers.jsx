import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { urlPath } from "../../constants";
import { useCurrencies } from "../../context/CurrenciesContextProvider";
import { getRandomCur } from "../../utils";

export function DiscoverOthers() {
  const [randomCurr, setRandomCurr] = useState([]);
  const { allCurrencies } = useCurrencies();
  const location = useLocation();

  useEffect(() => {
    setRandomCurr(getRandomCur(allCurrencies));
  }, [location]);

  return (
    <div className="">
      <ul className="overflow-y-auto h-1/4 ">
        {allCurrencies.length > 0 &&
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
