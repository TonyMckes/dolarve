import React from "react";
import { Link } from "react-router-dom";
import { urlPath } from "../../constants";

function DetailsButton({ _id, details, slug, type }) {
  return (
    <Link
      className="px-4 py-2 font-bold transition-colors rounded-md shadow-lg outline-none bg-emerald-300 hover:bg-emerald-400 dark:text-gray-800 ring-2 ring-emerald-400"
      state={{ details }}
      to={`/${urlPath[type]}/${slug || _id}`}
    >
      Más detalles
    </Link>
  );
}

export default DetailsButton;
