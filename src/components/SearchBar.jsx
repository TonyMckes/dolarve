import { useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";
import { useOutletContext } from "react-router-dom";

export default function SearchBar({
  currencies,
  setFilteredCur,
  variant,
  placeholder,
}) {
  const [searchFilter, setSearchFilter] = useState("");
  const { loading } = useOutletContext();

  const handler = (e) => {
    const value = e.target.value;

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
    >
      {searchFilter.length > 0 ? (
        <MdClose
          className="absolute w-6 h-6 mx-2 text-gray-400"
          onClick={() => handler({ target: { value: "" } })}
        />
      ) : (
        <MdSearch className="absolute w-6 h-6 mx-2 text-gray-400" />
      )}
      <input
        disabled={loading}
        className={` w-full md:my-1 dark:border-neutral-700 focus:border-neutral-500 focus:ring-2 hover:bg-neutral-50 duration-500 dark:bg-neutral-800 hover:dark:bg-neutral-700 px-3 py-1 pl-8 outline-none border shadow-inner rounded-xl ${
          loading
            ? "disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
            : ""
        }`}
        type="text"
        value={searchFilter}
        placeholder={placeholder}
        onChange={handler}
      />
    </label>
  );
}
