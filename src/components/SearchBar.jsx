import { useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";

function SearchBar({ currencies, onFilterCur, variant, placeholder }) {
  const [searchFilter, setSearchFilter] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    const filtered = currencies.filter(
      ({ name, symbol }) =>
        name.toLowerCase().includes(value.toLowerCase()) ||
        symbol.toLowerCase().includes(value.toLowerCase()),
    );

    setSearchFilter(value);

    if (!value) return onFilterCur([]);

    onFilterCur(filtered);
  };

  const handleClear = () => {
    setSearchFilter("");
    if (variant) return onFilterCur(currencies);
    onFilterCur([]);
  };

  return (
    <label
      className={`flex items-center w-full ${
        variant ? "sticky z-20 ml-16 mr-6 top-3 md:top-0 md:m-0 w-auto" : ""
      }`}
    >
      {searchFilter.length > 0 ? (
        <MdClose
          className="absolute w-6 h-6 mx-2 text-gray-400"
          onClick={handleClear}
        />
      ) : (
        <MdSearch className="absolute w-6 h-6 mx-2 text-gray-400" />
      )}
      <input
        // TODO: Check if I can bring back loading props
        // disabled={loading}
        // className={` w-full md:my-1 dark:border-neutral-700 focus:border-neutral-500 focus:ring-2 hover:bg-neutral-50 duration-500 dark:bg-neutral-800 hover:dark:bg-neutral-700 px-3 py-1 pl-8 outline-none border shadow-inner rounded-xl ${
        //   loading
        //     ? "disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        //     : ""
        // }`}
        className={` w-full md:my-1 dark:border-neutral-700 focus:border-neutral-500 focus:ring-2 hover:bg-neutral-50 duration-500 dark:bg-neutral-800 hover:dark:bg-neutral-700 px-3 py-1 pl-8 outline-none border shadow-inner rounded-xl `}
        type="text"
        value={searchFilter}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
}

export default SearchBar;
