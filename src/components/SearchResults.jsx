import { Link } from "react-router-dom";
import { urlPath } from "../constants/urlPath";

export default function SearchResults({ results }) {
  return (
    <div className=" bg-white">
      <ul className="">
        {results.length > 0 &&
          results.slice(0, 6).map(({ _id, name, icon, slug, symbol, type }) => (
            <li
              key={_id}
              className="hover:bg-neutral-100 dark:hover:bg-neutral-700 w-full transition-colors rounded-2xl "
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
