import SearchBar from "components/SearchBar";
import { useEffect, useState } from "react";
import List from "./List";
import ListSkeleton from "./ListSkeleton";

function CurrencyList({ currencies, loading }) {
  const [filteredCur, setFilteredCur] = useState(currencies);

  useEffect(() => {
    setFilteredCur(currencies);
  }, [currencies]);

  const handleFilter = (curr) => {
    setFilteredCur(curr);
  };

  return (
    <>
      <SearchBar
        currencies={currencies}
        placeholder="Filtrar lista..."
        onFilterCur={handleFilter}
        variant
      />

      {loading ? (
        <ListSkeleton />
      ) : currencies.length > 0 ? (
        <List filteredCur={filteredCur} />
      ) : (
        <div className="flex flex-col items-center justify-center h-screen text-xl">
          Nothing over here...
        </div>
      )}
    </>
  );
}

export default CurrencyList;
