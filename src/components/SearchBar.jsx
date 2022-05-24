import useDebounce from "hooks/useDebounce";
import { useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";

function SearchBar({ currencies, onFilterCur, variant, placeholder }) {
  const [searchFilter, setSearchFilter] = useState("");

  const containerStyles = variant
    ? "sticky z-10 top-3 md:top-0 md:m-0  w-auto ml-16 mr-6"
    : "";

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
    <form className={containerStyles} onSubmit={handleSubmit}>
      <label className="flex items-center w-full">
        {searchFilter.length > 0 ? (
          <MdClose className="absolute w-6 h-6 mx-2" onClick={handleClear} />
        ) : (
          <MdSearch className="absolute w-6 h-6 mx-2" />
        )}
        <input
          disabled={currencies?.length <= 0}
          className="w-full px-3 py-1 pl-8 duration-500 bg-white border shadow-inner outline-none md:my-1 disabled:!bg-neutral-450/50 disabled:cursor-not-allowed border-neutral-450 focus:ring-2 dark:bg-neutral-900 hover:bg-neutral-100 hover:dark:bg-neutral-700 rounded-xl"
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
