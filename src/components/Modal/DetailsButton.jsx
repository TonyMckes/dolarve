import React from "react";
import { Link } from "react-router-dom";
import { urlPath } from "../../constants";

export function DetailsButton({ modal, setModal }) {
  const { _id, slug, type } = modal.data;

  return (
    <Link
      className="px-4 py-2 font-bold transition-colors rounded-md shadow-lg outline-none bg-emerald-300 hover:bg-emerald-400 dark:text-gray-800 ring-2 ring-emerald-400"
      onClick={() => setModal({ ...modal, show: false })}
      to={`${urlPath[type]}/${slug ? slug : _id}`}
    >
      Ver detalles
    </Link>
  );
}
