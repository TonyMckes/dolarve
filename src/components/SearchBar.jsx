import { useState } from "react";
import { MdSearch, MdClose } from "react-icons/md";
import { useCurrencies } from "../context/CurrenciesContextProvider";

export default function SearchBar({
  currencies,
  setFilteredCur,
  variant,
  skeleton,
}) {
  const [searchFilter, setSearchFilter] = useState("");

  const handler = (e) => {
    const value = e.currentTarget.value;

    const filtered = currencies.filter(
      ({ name, symbol }) =>
        name.toLowerCase().includes(value.toLowerCase()) ||
        symbol.toLowerCase().includes(value.toLowerCase()),
    );

    if (value === "") {
      setSearchFilter(value);

      if (variant) return setFilteredCur(currencies);

      return setFilteredCur([]);
    }

    setSearchFilter(value);
    setFilteredCur(filtered);
  };

  return (
    <label
      className={`flex items-center w-full ${
        variant ? "sticky z-10 ml-16 mr-6 top-3 md:top-0 md:m-0 w-auto" : ""
      }`}
      htmlFor="searchBox"
    >
      {searchFilter.length > 0 ? (
        <MdClose
          className="absolute w-6 h-6 mx-2 text-gray-400"
          onClick={() => setSearchFilter("")}
        />
      ) : (
        <MdSearch className="absolute w-6 h-6 mx-2 text-gray-400" />
      )}
      <input
        disabled={skeleton}
        id="searchBox"
        className={`w-full px-3 py-1 pl-8 border shadow-inner rounded-xl focus:outline-slate-500 ${
          skeleton
            ? "disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
            : ""
        }`}
        type="text"
        value={searchFilter}
        placeholder="Buscar"
        onChange={(e) => handler(e)}
      />
    </label>
  );
}
