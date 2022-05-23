import useDebounce from "hooks/useDebounce";
import { useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";

function SearchBar({ currencies, onFilterCur, variant, placeholder }) {
  const [searchFilter, setSearchFilter] = useState("");

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    const filtered = currencies.filter(
      ({ name, symbol }) =>
        name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        symbol.toLowerCase().includes(searchFilter.toLowerCase()),
    );

    if (!searchFilter && variant) return onFilterCur(currencies);
    if (!searchFilter) return onFilterCur([]);

    onFilterCur(filtered);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setSearchFilter(value);
  };

  const handleClear = () => {
    setSearchFilter("");
    if (variant) return onFilterCur(currencies);
    onFilterCur([]);
  };

  useDebounce(handleSubmit, 600, [searchFilter]);

  return (
    <form onSubmit={handleSubmit}>
      <label
        className={`flex items-center w-full ${
          variant ? "sticky z-10 ml-16 mr-6 top-3 md:top-0 md:m-0 w-auto" : ""
        }`}
      >
        {searchFilter.length > 0 ? (
          <MdClose className="absolute w-6 h-6 mx-2 " onClick={handleClear} />
        ) : (
          <MdSearch className="absolute w-6 h-6 mx-2 " />
        )}
        <input
          // TODO: Check if I can bring back loading props
          // disabled={loading}
          // className={` w-full md:my-1 dark:border-neutral-700 focus:border-neutral-500 focus:ring-2 hover:bg-neutral-50 duration-500 dark:bg-neutral-800 hover:dark:bg-neutral-700 px-3 py-1 pl-8 outline-none border shadow-inner rounded-xl ${
          //   loading
          //     ? "disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
          //     : ""
          // }`}
          className="w-full px-3 py-1 pl-8 duration-500 border shadow-inner outline-none md:my-1 border-neutral-450 focus:ring-2 hover:bg-neutral-50 dark:bg-neutral-800 hover:dark:bg-neutral-700 rounded-xl"
          type="text"
          value={searchFilter}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

export default SearchBar;
